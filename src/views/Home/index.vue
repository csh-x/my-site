<!--
 * @Author: csh
 * @Date: 2023-11-23 22:37:26
 * @LastEditors: csh
 * @LastEditTime: 2023-12-13 23:06:51
 * @FilePath: /my-site/src/views/Home/index.vue
 * @Description: 主页
-->
<template>
  <div class="home-container">
    
  </div>
</template>

<script>
import { getData } from "@/apis/test"
export default {
  mounted() {
    getData().then(res => {
      console.log(res);
      
    })
  },
  methods: {
    
  }
}
</script>

<style>
</style>