import Vue from 'vue'
import Router from 'vue-router'
import NewHome from './views/NewHome.vue'
import User from './views/User.vue'
import Profile from './views/Profile.vue'
import Setting from './views/Setting.vue'
import HomeInfo from './views/HomeInfo.vue'
import Login from './views/Login.vue'

Vue.use(Router) // 必须

export default new Router({
  mode: 'history', // history模式
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: NewHome,
      children: [
        {
          path: 'info',
          name: 'homeinfo',
          component: HomeInfo
        },
        {
          path: '',
          name: 'home',
          component: HomeInfo
        }
      ]
    },
    {
      path: '/user',
      component: User,
      children: [{
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'setting',
        name: 'setting',
        component: Setting
      },
      {
        path: '',
        name: 'user',
        component: Profile
      }
      ]
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 用到了路由懒加载，实现代码块分割
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
