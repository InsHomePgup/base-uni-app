<template>
	<!-- 
			@name:模板文件
			@desc：用于创建新页面
			@date：2020-11-03
			@author: 周柯
	 -->
	<view>
		<text @click="openPage">跳转到home</text>
	</view>
</template>

<script>
	export default {
		onLoad(...options){
			console.log(options)
						console.log(this.$Route)
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
				
			},
			openPage(){
				this.$Router.push({
					name:"index"
				})
			}
		}
	}
</script>

<style scoped>
	.container{
		
	}
</style>
