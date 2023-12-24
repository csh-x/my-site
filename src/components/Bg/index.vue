<!--
 * @Author: csh
 * @Date: 2023-12-17 22:53:21
 * @LastEditors: csh
 * @LastEditTime: 2023-12-24 21:12:01
 * @FilePath: /my-site/src/components/Bg/index.vue
 * @Description: 
-->
<template>
  <div class="Bg-container">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import "./script"
export default {

}
</script>

<style  scoped>
@import url('./style.css');
.Bg-container {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
}
</style>