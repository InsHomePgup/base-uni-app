<template>
	<view>
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="content">导航栏名字</block>
		</cu-custom>
		<view class="container">

		</view>
	</view>
</template>

<script>
	export default {
		onLoad(){
			this.loadData();
		},
		onReady(){
			
		},
		data() {
			return {
				
			}
		},
		methods: {
			async loadData(){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		
	}
</style>
