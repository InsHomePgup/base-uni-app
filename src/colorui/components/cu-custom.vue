<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<slot name="left"></slot>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.$cache.get("_statusBar"),
				CustomBar: this.$cache.get("_customerBar")
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var StatusBar= this.$cache.get("_statusBar");
				var CustomBar= this.CustomBar;
				var CustomBar= this.$cache.get("_customerBar");
				var bgImage = this.bgImage;
				// console.log("statusbar",this.StatusBar);
				// console.log("Custombar",this.CustomBar);
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
		},
		methods: {
			BackPage() {
				this.$Router.back(1)
			}
		}
	}
</script>

<style>

</style>
