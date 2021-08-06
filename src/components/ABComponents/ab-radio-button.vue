<template>
	<!-- 
		@name:按钮单选
		@desc:
		@date:
		@author:
	 -->
	<view>
		<view class="ab-btn-box">
			<view 
			@click="change(item)" 
			class="ab-btn" 
			:class="item.value==currentValue?'is-check':''" 
			v-for="(item,index) in list">{{item.label}}
			:key="index"
			></view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			value:{
				type:String | Number
			},
			list:{
				type:Array,
				default:()=>{
					
				}
			}
		},
		watch:{
			value(val){
				// console.log("检测到了值的变化",val)
				this.currentValue = val
			}
		},
		mounted() {
			this.currentValue = this.value
		},
		data() {
			return {
				currentValue:0,
				buttonList:[
					{
						label: '10m',
						value: 0
					},
					{
						label: '20m',
						value: 1
					},
					{
						label: '30m',
						value: 2
					}
				]
			}
		},
		methods: {
			change(item){
				this.$emit('change',item)
				this.currentValue = item.value
			}
		}
	}
</script>

<style lang="scss" scoped>

.ab-btn-box{
	border: 1px solid #e2e2e2;
	border-radius: 20rpx;
	overflow: hidden;
	display: flex;
	margin-right: 10rpx;
}

.ab-btn{
	height: 60rpx;
	// padding: 0 5rpx;
	line-height: 60rpx;
	font-size: 32rpx;
	width: 4em;
	text-align: center;
	// background-color: #003893;
	color: #333333;
	&:not(:last-child){
		// background-color: black;
		border-right: 1px solid #e2e2e2;
	}
}

.ab-btn.is-check{
	background-color: #003893;
	color: #ffffff;
}



</style>
