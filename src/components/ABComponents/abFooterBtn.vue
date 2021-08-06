<template>
	<!-- 
		@name: 底部的按钮组件
		@desc:
		@date:
		@author:
	 -->
	<view>
		<view v-if="type==='edit'" class="ab-footer-btn-box">
			<button class="cu-btn bg-theme text-white" @click="handleEditSave">保存</button>
			<button class="cu-btn bg-red text-white" @click="handleDelete">删除</button>
		</view>
		<view v-if="type==='save'" class="ab-footer-btn-box">
			<button class="cu-btn bg-theme save-btn" @click="handleSave">{{confirmText}}</button>
		</view>
		<view class="empty-box"></view>
	</view>
</template>

<script>
	export default {
		props: {
			type: {
				type: String,
				default: "save"
			},
			confirmText:{
				type:String,
				default:'保存'
			}
		},
		mounted() {

		},
		data() {
			return {

			}
		},
		methods: {
			handleSave() {
				this.$emit("saveClick")
			},
			handleDelete() {
				this.$emit("deleteClick")
			},
			handleEditSave(){
				this.$emit("editSaveClick")
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ab-footer-btn-box {
		position: fixed;
		z-index: 10;
		bottom: 50rpx;
		right: 0;
		width: 100%;
		height: 100rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;

		.cu-btn {
			width: 300rpx;
			height: 80rpx;
		}

		.save-btn {
			width: 700rpx;
			color: #FFFFFF;
			height: 80rpx;
		}
	}


	.empty-box {
		height: 150rpx;
		// z-index: 5;
		// background-color: #FFFFFF;
	}
</style>
