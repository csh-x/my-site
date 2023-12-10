<!--
 * @Author: csh
 * @Date: 2023-11-23 22:37:26
 * @LastEditors: csh
 * @LastEditTime: 2023-12-10 23:46:08
 * @FilePath: /my-site/src/views/Home/index.vue
 * @Description: 主页
-->
<template>
  <div class="home-container" ref="homeContainer">
    <h1>首页</h1>
    <button @click="handleClick">click</button>    
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      let options = {
        content: "这是一条消息！",
        type:  "warn",
        container: this.$refs.homeContainer,
        callback: function() {
          console.log('消失了奥！消失回调触发了');
        }
      }
      this.$showMessage(options)
    }
  }
}
</script>

<style>
  .home-container {
    background: black;
    position: relative;
  }
</style>