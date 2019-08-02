<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- 普通组件，自定了msg属性 -->
    <HelloWorld msg="Welcome to Your Vue.js App hahaha"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  // 局部组件
  components: {
    HelloWorld
  }
}
</script>
