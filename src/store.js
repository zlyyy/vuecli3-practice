import Vue from 'vue'
import Vuex from 'vuex'
// import api from './api'

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
      const userName = await new Promise(async (resolve, reject) => {
        if (state.isLogin) {
          resolve('zly')
        } else {
          // 同步方法
          // const res = await api.login()
          // console.log('res=' + JSON.stringify(res))
          // commit('toLogin')
          // resolve('zly')

          // 异步方法
          // api.loginAsync().then(function (data) {
          //   console.log(data)
          // }).catch(function (error) {
          //   console.log(JSON.stringify(error))
          // })

          // 测试代码
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
