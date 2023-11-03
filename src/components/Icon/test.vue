<!--
 * @Author: csh
 * @Date: 2023-11-03 23:43:52
 * @LastEditors: csh
 * @LastEditTime: 2023-11-03 23:44:59
 * @FilePath: /my-site/src/components/Icon/test.vue
 * @Description: 
-->
<template>
    <div id="app">
        <h1>App组件</h1>
        <Icon  />
    </div>
</template>

<script>
import Icon from "./"

export default {
    name: "App",
    components: {
      Icon
    },
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.iconfont {
  color: red;
}
</style>
