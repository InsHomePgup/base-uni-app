let cacheMap =  new Map()  // 创建一个运行时的缓存Map
let timeoutDefault = 1200   // 默认1200秒过期


/**
 * @param {Object} name  当前变量的key
 * 	判断当前的变量是否已经过期，返回true 则表示已经过期
 * 							返回false 当前变量没有过期
 */
function isTimeout (name) {   // 判断当前的这个变量有没有过期
  const data = cacheMap.get(name)  // 先从map中取出这个缓存的值
  if (!data) return true  // 如果当前的key都不存在，则直接返回true
  if (data.timeout === 0) return false // 如果当前的变量是永久的话，返回false
  const currentTime = Date.now()		// 获取当前的时间
  const overTime = (currentTime - data.createTime) / 1000  // 获取时间差
  if (overTime > data.timeout) {		// 如果时间差大于了  这个变量存在的时间
    cacheMap.delete(name)				// 从缓存map中删除当前的元素
    if (name.startsWith('_')) {			// 如果是存到本地的，也就是用 _开头的
      try {
        uni.removeStorageSync(name)   // 从本地中移除这个元素
      } catch (e) {
        console.log(e)
      }
    }
    return true  // 当前的变量已过期
  }
  return false  // 如果没过期，并且这个变量存在，则可以表示当前变量存在
}

class CacheCell {		// 创建一个缓存单元
  constructor (data, timeout) {
    this.data = data
    this.timeout = timeout
    this.createTime = Date.now()
  }
}

class MinCache {  // 缓存插件
  constructor (timeout) {  // 初始化，把缓存里的 东西加载到  map里
    try {
      const res = uni.getStorageInfoSync()
      res.keys.forEach(name => {
        try {
          const value = uni.getStorageSync(name)
          cacheMap.set(name, value)
        } catch (e) {
          console.log(e)
        }
      })
    } catch (e) {
      console.log(e)
    }
    timeoutDefault = timeout		// 设置过期的时间
  }
  set (name, data, timeout = timeoutDefault) {		// 载入一个缓存
    const cachecell = new CacheCell(data, timeout)
    let cache = null
    if (name.startsWith('_')) {	// 如果有下划线的，存储到本地
      try {
        uni.setStorageSync(name, cachecell)
        cache = cacheMap.set(name, cachecell)
      } catch (e) {
        console.log(e)
      }
    } else {		// 没有下划线的存储到map里
      cache = cacheMap.set(name, cachecell)
    }
    return cache
  }
  get (name) {		// 没过期的话，返回 值
    return isTimeout(name) ? null : cacheMap.get(name).data
  }
  delete (name) {		// 删除一个缓存
    let value = false
    if (name.startsWith('_')) {
      try {
        uni.removeStorageSync(name)
        value = cacheMap.delete(name)
      } catch (e) {
        console.log(e)
      }
    } else {
      value = cacheMap.delete(name)
    }
    return value
  }
  
  has (name) {		// 判断这个缓存是否存在
    return !isTimeout(name)
  }
  
  clear () {		// 清空当前  应用的全部缓存
    let value = false
    try {
	  uni.clearStorage();
      uni.clearStorageSync()
      cacheMap.clear()
      value = true
	  uni.getStorageInfo({
	  	success:function(e){
	  		console.log("缓存信息",e)
	  	}
	  })
    } catch (e) {
      console.log(e)
    }
    return value
  }
  
  /**
   * @param {Object} cacheNameList    需要保留的缓存的列表
   * [cache1,cache2,cache3]
   * // 清空当前的其他缓存，保留一部分缓存
   */
  clearOther(cacheNameList){
	  // 1. 先用map装当前需要保留的缓存
	  // 2. 清空缓存
	  // 3. 载入保留的缓存
  	
  }
  
}

MinCache.install = function (Vue, {timeout = 1200} = {}) {		// 安装Vue插件
  Vue.prototype.$cache = new MinCache(timeout)  // 全局挂载cache
  // 用$cache 来调用，也可以换别的$
}
/**
 * cacheName: 缓存的key， 如果是下划线开头的，存储到本地，不是的话。存储到map
 * cacheValue：缓存的值 value
 * time ： 缓存的时间， 0：永久缓存
 * this.$cache.set("cacheName",cahceValue,time)
 * 
 * 
 * this.$cache.get("cacheName")  // 获取缓存的值
 * 
 * this.$cache.clear()		// 清空所有缓存
 * 
 */
export default MinCache
