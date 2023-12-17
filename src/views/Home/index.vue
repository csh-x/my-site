<!--
 * @Author: csh
 * @Date: 2023-11-23 22:37:26
 * @LastEditors: csh
 * @LastEditTime: 2023-12-17 23:06:07
 * @FilePath: /my-site/src/views/Home/index.vue
 * @Description: 主页
-->
<template>
  <div class="home-container">
    <Bg />
  </div>
</template>

<script>
import Bg from "@/components/Bg"
import { getData } from "@/apis/test"
export default {
  components: {
    Bg
  },
  mounted() {
    getData().then(res => {
      console.log(res);
      
    })
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
  .home-container {
    
  }
</style>