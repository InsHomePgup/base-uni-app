import MinRequest from '../MinRequest'
const minRequest = new MinRequest()
const files = require.context('./modules/', true, /\.js$/);
let apis = {}
files.keys().forEach(key => {
	let item = files(key).default || []
	Object.assign(apis, item)
})
// 请求拦截器
minRequest.interceptors.request((request) => {
	return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
	return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
	// config.baseURL = 'https://www.baidu.com'
	config.baseURL = 'http://127.0.0.1:7001'
	return config
})


export default {
	apis: apis
}
