<template>
	<!-- 
			@name:模板文件
			@desc：用于创建新页面
			@date：2020-10-22
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
