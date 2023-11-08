<!--
 * @Author: csh
 * @Date: 2023-11-07 20:25:38
 * @LastEditors: csh
 * @LastEditTime: 2023-11-08 22:03:31
 * @FilePath: /my-site/src/components/Menu/index.vue
 * @Description: 
-->
<template>
  <div class="menu-container">
    <a href="">
        <Icon type="home" />
    </a>
    <span>首页</span>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {
    components: {
        Icon
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
    .menu-container {
        color: @gray;
    }
</style>