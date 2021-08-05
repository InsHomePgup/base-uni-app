<template>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="false">
			<block slot="content">首页</block>
		</cu-custom>
		<view class="bg-blue padding-xl">
			<text @click="openPage">路由测试</text>
		</view>
		<view class="container__wrapper">
			123 Scss 测试
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.$cache.set("_name",'zhangsan',0)
			let name = this.$cache.get("_name")
			console.log("缓存测试",name);
		},
		methods: {
			openPage() {
				console.log('点击了跳转');
				this.$Router.push({
					name: "home",
					params:{
						str:'路由传参调试'
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.container{
		&__wrapper{
			background-color: #FFFFFF;
			font-size: 40rpx;
			
		}
	}
</style>
