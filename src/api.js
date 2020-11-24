import MinRequest from './MinRequest'
import ABCache from './ABCache.js'
const cache = new ABCache();
const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
	console.log("请求",request);
  return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
	console.log('响应',response);
  return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
  config.baseURL = 'http://192.168.16.175:8083/'  // 邱
  // config.baseURL = '192.168.16.175:8083'
  return config
})


export default {
  apis: {
    uniapp (data) {
      return minRequest.get('/s', data)
    },
	testApi (data) {		// 测试连通性
	  return minRequest.get('v1/app/hello', data)
	},
	login(data){		// 登录
		return minRequest.post('v1/app/login', data)
	}
  }
}
