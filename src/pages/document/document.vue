<template>
	<!-- 
			@name:文档页面
			@desc：如何建立良好的代码风格？
			@date：2020-10-22
			@author:Abraham
			@Todo:如何更好的写出适合多人开发的代码呢?
			
			以下内容只适合  vue  后缀的文件，不适合  nvue 的文件，nvue的文件请参考官网的文档。
			nvue文件只在APP端有较好的效果。
			
			
			uni-app  官网  https://uniapp.dcloud.io/
			u-view   框架  https://www.uviewui.com/
			
			css 框架  color ui  在主目录的 colorui 里,已经全局引入,可直接使用
			路由文档 		http://hhyang.cn/  	  路由跳转的问题都去这里找
	 -->
	<view class="container">
		<!--
			这里的导航栏是根据设备和  不同端自适应的  务必使用这个  nav-bar
		 -->
		<cu-custom bgColor="bg-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">导航栏名字</block>
		</cu-custom>
		<view class="img-box">
			<!-- 所有图片使用这个组件   ,u-view框架的图片组件 -->
			<u-image>图片</u-image>
			<view>
				<view>盒子</view>
				<text>文字</text> 
			</view>
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
				name:"" // 这个变量是做什么用的
			}
		},
		methods: {
			async loadData(){
				// 统一的数据加载方法
				// 页面的初始化数据都在这里执行
			},
			/**
			 * 对于每一个method 的注释
			 * 这个方法是做什么用的
			 * @params： 参数列表和参数的含义
			 */
			method(){
				
			},
			/**
			 * 请求 的第一种方式
			 */
			async api1(){
				let requestParams = {}
				/**
				 * api.js列表
				 * 
				 * 
				 * $minApi
				 */
				let result =await this.$minApi.method(requestParams)
				console.log("请求的返回值",result);
				// 第二种   异步请求  
				this.$minApi.method(requestParams).then(res=>{
					console.log("请求的返回值",res);
				})
			},
			/**
			 * 跳转路由
			 * 路由文档 		http://hhyang.cn/  	
			 */
			openPage(){
				this.$Router.push({
					name:"跳转页面的注册名"  // router/modules/home.js  注册   
				})
			},
			setCache(){		
				/**
				 * 三个参数
				 * 第一个，缓存的key，      下划线开头的话，表示存到 本地缓存里，不然就是存到 map 里，程序运行时有效
				 * 第二个，缓存保存的值			
				 * 第三个，缓存持续的时间，超时返回null
				 */
				this.$cache.set("name","张三",0);  // 程序运行时有效
				this.$cache.set("_name","李四",1200);  // 1200秒以内有效，保存到本地缓存
			},
			getCache(){
				let name = this.$cache.get("_name");
			},
			msg(){
				this.$u.toast('给用户发送文字信息');
			}
			
		}
	}
</script>

<style lang="scss">

</style>
