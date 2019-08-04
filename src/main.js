import Vue from 'vue'
// import App from './App.vue'
import NewApp from './NewApp.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // element ui样式导入
import api from './api'

// webpack打包的入口文件，从这个文件开始建依赖
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$api = api

new Vue({
  router, // 从根实例注入router，store，所有子组件都可以用了
  store,
  render: h => h(NewApp)
  // 要么el，要么render，要么template。没有el的时候需要主动mount
  // h约定好是this.$creatElement的简写
  // 当没有render和template时，有el会把指定的Dom元素的内容提取出来作为模板
  // 这里用App组件的模板实例化了根实例
}).$mount('#app')
