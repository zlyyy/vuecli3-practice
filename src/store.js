import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) // 必须

export default new Vuex.Store({
  state: {
    isLogin: false,
    userName: ''
  },
  mutations: {
    toLogin: state => {
      state.isLogin = true
      state.userName = 'zly'
    },
    logout: state => {
      state.isLogin = false
      state.userName = ''
    }
  },
  actions: {

  }
})
