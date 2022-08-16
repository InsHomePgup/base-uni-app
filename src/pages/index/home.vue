<template>
	<!-- 
			@name:模板文件
			@desc：用于创建新页面
			@date：2020-11-03
			@author: 周柯
	 -->
	<view>
		<u-navbar title="测试用主页"></u-navbar>
		<text @click="openPage">跳转到home</text>
		<!-- <view @click="">接口</view> -->
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
			// this.testRequest1()
			// this.testRequest2()
			this.testRequest3()
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
			},
			// 使用方法一
			testRequest1 () {
				this.$ab.uniapp({wd: 'uni-app'}).then(res => {
					this.res = res
					console.log(res)
				}).catch(err => {
					console.log(err)
				})
			},
			
			// 使用方式二
			async testRequest2 () {
				try {
					const res = await this.$ab.login({wd: 'uni-app'})
					console.log(res)
				} catch (err) {
					console.log(err)
				}
			},
			testRequest3(){
				this.$post('/addExercise',{title:"登山",desc:"爬山"}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style scoped>
	.container{
		
	}
</style>
