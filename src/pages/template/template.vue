<template>
	<!--
		@name:
		@desc：
		@date：2021-12-21 9:58:47 ?F10: AM?
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
