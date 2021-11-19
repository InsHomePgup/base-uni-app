<template>
	<!-- 
		@name: 弹出框,删除用弹出框,确认取消的弹出框
		@desc:
		@date:
		@author:
	 -->
	<view class="cu-modal" :class="visiable?'show':''">
		<view class="cu-dialog">
			<view class="cu-bar bg-white justify-end">
				<view class="content">{{title}}</view>
				<view class="action" @tap="cancel">
					<text class="cuIcon-close text-red"></text>
				</view>
			</view>
			<view class="padding-xl bg-white">
				{{content}}
			</view>
			<view class="cu-bar bg-white solid-top">
				<view class="action margin-0 flex-sub text-green solid-left" @tap="confirm">确认</view>
				<view class="action margin-0 flex-sub  solid-left" @tap="cancel">取消</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			show: {
				type: Boolean,
				default: false
			},
			title: {
				type: String
			},
			content: {
				type: String
			}
		},
		watch: {
			show: function(val) {
				this.visiable = val
			}
		},
		onLoad() {

		},
		data() {
			return {
				visiable: false
			}
		},
		methods: {
			confirm() {
				this.$emit("confirm")
			},
			cancel() {
				this.$emit("cancel")

			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
