import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { router } from '../router'

console.log("路由==", router)



export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    push(){
      router.push({
        name: "home"
      })
    },
    increment(state) {
      state.count++
    }
  }
})