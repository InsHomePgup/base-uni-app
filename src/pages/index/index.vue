<template>
	<view class="container">
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">登录</block>
		</cu-custom>
		<view class="bg-blue padding-xl">
			<text @click="openPage">跳转到home</text>
		</view>
		<view>
			
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
		
	}
</style>
