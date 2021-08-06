<template>
	<!-- 
		@name: 选择器组件
		@desc:
		@date:
		@author:
	 -->
	<view class="flex justify-between">
		<u-select v-model="visiable" :default-value='defaultValue' mode="single-column" :list="list" @confirm="confirmSelect"></u-select>
		<text @click="openModal">{{text?text:'请选择'}}</text>
	</view>
</template>

<script>
	export default {
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			value:{
				type:String | Number,
				default:-1
			},
			list: {
				type: Array,
				default: () => {
					return []
				}
			},

		},
		mounted() {
			this.actionSheetList = this.list
			// console.log("获取到的列表信息",this.actionSheetList)
			// console.log("获取到的value",this.value)
			if(this.value){
				const index = this.actionSheetList.findIndex(res=>{
					if(res.value === this.value){
						return res
					}
				})
				
				if(index!==-1){ // 找到了元素
					this.text = this.actionSheetList[index].label
					this.defaultValue = [index]
				}
				
			}
		},
		data() {
			return {
				text: '',
				visiable: false,
				actionSheetList: [],
				defaultValue:[]
			}
		},
		methods: {
			confirmSelect(e) {
				// console.log("选择了", e)
				this.$emit("change",e[0].value)  // 双向绑定
				this.text = e[0].label
			},
			openModal(){
				if(this.list.length ===0){
					this.$u.toast("无可用选项")
				}else{
					this.visiable = true
				}
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>
