import Vue from 'vue'
import App from './App'
import MinRequest from './MinRequest'
import minRequest from './api'
import ABCache from './ABCache' // 缓存封装
import {router,RouterMount} from './router.js'  //路径换成自己的
import uView from "uview-ui";

Vue.use(router)
Vue.use(uView);
Vue.use(ABCache) // 缓存
Vue.use(MinRequest)  // 请求

let cache = new ABCache();
uni.getSystemInfo({
	success: function(e) {
		// #ifndef MP
		cache.set("_statusBar", e.statusBarHeight, 0)
		// Vue.prototype.StatusBar = e.statusBarHeight;
		if (e.platform == 'android') {
			cache.set("_customerBar", e.statusBarHeight + 50, 0)
			// Vue.prototype.CustomBar = e.statusBarHeight + 50;
		} else {
			cache.set("_customerBar", e.statusBarHeight + 45, 0)
			// Vue.prototype.CustomBar = e.statusBarHeight + 45;
		};
		// #endif

		// #ifdef MP-WEIXIN
		cache.set("_statusBar", e.statusBarHeight, 0)
		// Vue.prototype.StatusBar = e.statusBarHeight;
		let custom = wx.getMenuButtonBoundingClientRect();
		cache.set("_custom", custom, 0)
		cache.set("_customerBar", custom.bottom + custom.top - e.statusBarHeight, 0)
		// Vue.prototype.Custom = custom;
		// Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
		// #endif		

		// #ifdef MP-ALIPAY
		cache.set("_statusBar", e.statusBarHeight, 0)
		// Vue.prototype.StatusBar = e.statusBarHeight;
		cache.set("_customerBar", e.statusBarHeight + e.titleBarHeight, 0)
		// Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
		// #endif
	}
})


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
//v1.3.5起 H5端 你应该去除原有的app.$mount();使用路由自带的渲染方式
// #ifdef H5
	RouterMount(app,router,'#app')
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif
