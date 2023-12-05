<!--
 * @Author: csh
 * @Date: 2023-11-15 22:13:20
 * @LastEditors: csh
 * @LastEditTime: 2023-12-05 23:11:44
 * @FilePath: /my-site/src/components/Layout/index.vue
 * @Description: 布局组件
-->
<template>
    <div class="layout-container">
        <div class="left">
            <slot name="left"></slot> 
        </div>
        <div class="main">
            <slot></slot>
        </div>
        <div class="right"> 
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left, .right {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto;
    overflow: hidden;
  }
} 
</style>