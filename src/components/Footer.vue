<template>
  <div class="tfooter">
    {{userName}}{{isLogin ? ',您好' : '您还未登录'}}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  name: 'tfooter',
  data () {
    return {
      message: '请您先登录'
    }
  },
  computed: {
    ...mapState([
      'isLogin',
      'userName'
    ])
  }
}
</script>

<style lang="less">
    .tfooter {
        position: fixed;
        height: 100px;
        width: 100%;
        bottom: 0;
        line-height: 100px;
        text-align: center;
        color: red;
    }
</style>
