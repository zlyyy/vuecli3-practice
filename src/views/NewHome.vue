<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">根</router-link> |
      <router-link to="/home">home</router-link> |
      <router-link to="/home/info">/home/info</router-link> |
      <router-link to="/user">user</router-link> |
      <router-link to="/user/profile">user/profile</router-link> |
      <router-link to="/user/setting">/user/setting</router-link>
    </div> -->
    <div>this is home</div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home'
}
</script>

<style lang="less">
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
