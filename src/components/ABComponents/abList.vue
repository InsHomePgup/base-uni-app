<template>
	<!-- 
		@name:长列表  带下拉刷新的列表
		@desc:
		@date:
		@author:
	 -->
	<view>
		<view v-if="isEmpty" class="scroll-box bg-white flex flex-direction align-center justify-center">
			<u-empty text="数据为空" mode="data"></u-empty>
		</view>
		<scroll-view 
			v-else 
			:scroll-y="true" 
			class="scroll-box"
			:refresher-enabled="refresh" 
			:refresher-triggered="triggered" 
			@scrolltolower="loadListData('add')"
			@refresherpulling="onPulling" 
			@refresherrefresh="onRefresh" 
			@refresherrestore="onRestore"
			@refresherabort="onAbort">
			<view v-for="(item,index) in list" :key="index" @click="itemClick(item)">
				<slot :item="item" :index="index"></slot>
			</view>
			<view style="min-height: 80rpx;" class="flex flex-direction align-center">
				<u-loadmore :status="loadStatus" />
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			isLonger: {
				type: Boolean,
				default: false
			},
			isLongest: {
				type: Boolean,
				default: false
			},
			loadData: { // 数据的来源
				type: Function,
				require: true
			},
			dataFormat: {
				type: Function,
				default: (item) => {
					return item
				}
			},
			refresh: { // 是否开启下拉刷新
				type: Boolean,
				default: false
			}
		},
		mounted() {
			this.loadListData()
			// console.log(this.dataFormat)
		},
		data() {
			return {
				isRefreshing: false,
				_freshing: false,
				triggered: false,
				loadStatus: "loadmore",
				list: [],
				pageSize: 10,
				pageNo: 1,
				isEmpty: false
			}
		},
		methods: {
			reload() { // 重载当前的数据
			console.log("abList===================reload")
				this.pageSize = 10
				this.pageNo = 1
				this.list = []
				this.isEmpty = false
				this.loadStatus = 'loadmore'
			},
			async loadListData(type, method) { // 加载数据
				if (type === 'init') { // 初始化模式,重置列表的参数
					this.reload()
				}
				if (this.loadStatus === 'loading' || this.loadStatus === 'nomore') { // 正在加载或者没有更多数据直接返回
					return;
				}
				this.loadStatus = "loading" // 进入到正在加载
				let params = {
					pageSize: this.pageSize,
					pageNo: this.pageNo
				}
				const result = await this.loadData(params) // 服务器返回的数据
				console.log("获取到的数据", result)

				if (result.records.length === 0) { // 没有数据了,分是否是第一页
					if (this.pageNo === 1) { // 第一页就没数据
						this.isEmpty = true // 直接判定为空数据页面
						return;
					} else {
						this.loadStatus = 'nomore' // 其他页直接返回
						return;
					}
				} else { // 有数据
					let addList = []
					result.records.forEach(item => { // 直接加入到列表里
						// addList.push(this.dataFormat(item)) // 传参格式化
						addList.push(item)
					})
					this.list = this.list.concat(addList) // 把数据追加到列表里面
					if (result.records.length < this.pageSize) { // 有数据,但是数据不够了,进入nomore
						this.loadStatus = 'nomore'
					} else { // 有数据,并且还有下一页
						this.pageNo++ // 页码+1
						this.loadStatus = 'loadmore'
					}

				}
				if (method === 'pull') { // 当前是下拉刷新模式
					this.triggered = false;
					this._freshing = false;
					this.$u.toast("刷新成功")
				}
			},
			itemClick(item) {
				this.$emit("itemClick",item)
			},
			//下拉过程的函数
			onPulling(e) {
				// console.log("开始下拉")
			},
			//松手后执行下拉事件的函数
			onRefresh() {
				if (this._freshing) return;
				this.triggered = 'restore';
				this._freshing = true // 开始刷新
				this.loadListData('init', 'pull')
			},
			//开始结束下拉的函数
			onRestore() {
				this.triggered = 'restore'; // 关闭动画
			},
			//结束下拉函数
			onAbort() {
			},
		}
	}
</script>

<style lang="scss" scoped>
	.scroll-box {
		// #ifdef H5
		height: calc(100vh - 88rpx);
		// #endif

		// #ifdef MP-WEIXIN
		height: calc(100vh - 88rpx);
		// #endif
	}
</style>
