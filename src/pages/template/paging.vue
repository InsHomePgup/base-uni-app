<template>
	<!-- 
			@name:分页
			@desc:		常见的上拉加载，下拉刷新页面
			这是单纯的列表
			@date：2020-12-05
			@author: 
	 -->
	<view>
		<!-- 
			这里的导航栏是根据设备和  不同端自适应的  务必使用这个  nav-bar
		 -->
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">导航栏名字</block>
		</cu-custom>
		<view class="container">
			<view v-if="isEmpty"><!-- 这里用来放为空时的情况 --></view>
			<view>
				<!-- 这里导入一个组件 用来列表的单元 -->
				<!-- 这里加上一个    加载状态组件 -->
			</view>
		</view>
	</view>
</template>

<script>
export default {
	onLoad() {
		this.loadData('init');
	},
	onReady() {},
	onPullDownRefresh() {
		// 下拉刷新
		this.loadData('init');
	},
	onReachBottom() {
		// 上拉加载
		this.loadData('add');
	},
	data() {
		return {
			list: [], // 模拟分页的那个列表
			pageNum: 1,
			pageSize: 10,
			loadStatus: 'loadmore',
			isEmpty: false
		};
	},
	methods: {
		/**
		 * @param {Object} source
		 * 1, 加载源，分init 和add 两个模式，也可以自己添加
		 */
		async loadData(source) {
			if (source === 'init') {
				// 列表初始化
				this.pageNum = 1;
				this.list = [];
				this.loadStatus = 'loadmore';
				this.isEmpty = false;
			}
			if (this.loadStatus === 'nomore' || this.loadStatus === 'loading') {
				// 防止重复加载
				return;
			}
			this.loadStatus = 'loading'; // 正在加载中
			this.$api.methods().then(res => {
				console.log('获取到的列表', res.list);
				if (source === 'init' && res.list === 0) {
					// 初始化时列表为空
					this.isEmpty = true;
				}
				if (res.list.length < this.pageSize) {
					// 如果分页数量不够, 则是  没有更多的状态
					this.loadStatus = 'nomore';
				} else {
					this.loadStatus = 'loadmore';
					this.pageNum++; // 有更多数据，加载页数
				}
				this.formatList(res.list); // 对数据列表进行处理
			});
		},
		formatList(list) {
			// 格式化列表，可以打造自己自定义的数据
			this.list = this.list.concat(list); // 默认拼接到当前的列表上就好了
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
}
</style>
