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
    login: async ({ commit, state }) => {
      const userName = await new Promise((resolve, reject) => {
        if (state.isLogin) {
          resolve('zly')
        } else {
          setTimeout(() => {
            console.log(new Date() + ' login success')
            commit('toLogin')
            resolve('zly')
          }, 2000)
        }
      })
      return userName
    }
  }
})
