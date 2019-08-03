<template>
  <div id="app">
    <!-- 路由导航，具体加载什么路由组件，得看router的配置-->
    <div id="nav" v-if="seen">
      <!-- <router-link to="/home">home</router-link> |
      <router-link to="/home/info">/home/info</router-link> |
      <router-link to="/user">user</router-link> |
      <router-link to="/user/profile">user/profile</router-link> |
      <router-link to="/user/setting">/user/setting</router-link>
      <router-link to="/login">/login</router-link> -->
      <THeader></THeader>
    </div>
    <!-- 路由视图，路由组件显示在下面 -->
    <router-view/>
    <TFooter v-if="seen"></TFooter>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import THeader from './components/Header.vue'
import TFooter from './components/Footer.vue'
// @ is an alias to /src
export default {
  name: 'user',
  data () {
    return {
      seen: true
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to)
      if (to.path === '/login') {
        this.seen = false
      } else {
        this.seen = true
      }
    }
  },
  components: {
    THeader,
    TFooter
  }
}
</script>
