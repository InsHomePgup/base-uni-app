<template>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">登录</block>
		</cu-custom>
		<view class="bg-blue padding-xl">
			<text @click="openPage">跳转到home</text>
		</view>
		<view class="container__wrapper">
			123
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
					name: "home"
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
