<template>
	<page-meta root-font-size="10px">
		<head>
			// 仅vue3 ssr支持，此节点下的元素会被拷贝到h5页面的head标签下，可以利用此特性进行seo优化
			<meta name="keyword" :content="title" />
		</head>
	</page-meta>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="false"><block slot="content">首页</block></cu-custom>
		<view class="bg-blue padding-xl"><text @click="openPage">路由测试</text></view>
		<view class="container__wrapper">123 Scss 测试</view>
		<text class="rem-12">12</text>
		<text class="rem-14">14</text>
		<text class="rem-16">16</text>
		<text class="rem-18">18</text>
		<!-- 		<ab-list :loadData="loadData">
			<slot slot-scope="{item,index}">
				{{item.name}} {{index}}
			</slot>
		</ab-list> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			loadData: () => {
				return new Promise((resolve, reject) => {
					resolve({
						records: [
							{
								name: 'zhangsan'
							},
							{
								name: 'lisi'
							}
						]
					});
				});
			}
		};
	},
	onLoad() {
		// 云函数测试
		// uniCloud.callFunction({
		// 	name:"test"
		// }).then(res=>{
		// 	console.log("调用云函数的返回值",res)
		// })
		// 缓存测试
		this.$cache.set('_name', 'zhangsan', 0);
		let name = this.$cache.get('_name');
	},
	methods: {
		openPage() {
			console.log('点击了跳转');
			this.$Router.push({
				name: 'home',
				params: {
					str: '路由传参调试'
				}
			});
		}
	}
};
</script>

<style lang="scss">
.container {
	&__wrapper {
		background-color: #ffffff;
		font-size: 4em;
	}
}

.rem-12{
	font-size: 1.2rem;
}
.rem-14{
	font-size: 1.4rem;
}
.rem-16{
	font-size: 1.6rem;
}

.rem-18{
	font-size: 1.8rem;
}
</style>
