<template>
  <div class="header">
      <router-link to="/home">home</router-link> |
      <router-link to="/home/info">/home/info</router-link> |
      <router-link to="/user">user</router-link> |
      <router-link to="/user/profile">user/profile</router-link> |
      <router-link to="/user/setting">/user/setting</router-link> |
      <router-link v-if="!isLogin" to="/login">登录</router-link>
      <button v-else @click="logout">退出登录</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
// @ is an alias to /src
export default {
  name: 'theader',
  computed: {
    ...mapState([
      'isLogin'
    ])
  },
  methods: {
    ...mapMutations([
      'logout'
    ])
  }
}
</script>
