<template>
    <view class="container">
        <cu-custom bgColor="bg-blue" :isBack="false">
            <block slot="content">首页</block>
        </cu-custom>
        <view class="bg-blue padding-xl">
            <text @click="openPage">路由测试</text>
        </view>
        <view class="bg-blue padding-xl">
            <text @click="openPageByStore">路由测试2</text>
        </view>
        <view class="container__wrapper">
            123 Scss 测试
        </view>
        <!-- 		<ab-list :loadData="loadData">
			<slot slot-scope="{item,index}">
				{{item.name}} {{index}}
			</slot>
		</ab-list> -->
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello',
            loadData: () => {
                return new Promise((resolve, reject) => {
                    resolve({
                        records: [{
                            name: 'zhangsan'
                        }, {
                            name: 'lisi'
                        }]
                    })
                })
            }
        }
    },
    onLoad() {
        // 云函数测试
        // uniCloud.callFunction({
        // 	name:"test"
        // }).then(res=>{
        // 	console.log("调用云函数的返回值",res)
        // })
        // 缓存测试
        this.$cache.set("_name", 'zhangsan', 0)
        let name = this.$cache.get("_name")
    },
    methods: {
        openPage() {
            console.log('点击了跳转');
            this.$Router.push({
                name: "home",
                params: {
                    str: '路由传参调试'
                }
            })
        },
        openPageByStore() {
            this.$store.commit('push')
        }
    }
}
</script>

<style lang="scss">
.container {
    &__wrapper {
        background-color: #ffffff;
        font-size: 40rpx;
    }
}
</style>
