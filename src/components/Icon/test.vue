<!--
 * @Author: csh
 * @Date: 2023-11-03 23:43:52
 * @LastEditors: csh
 * @LastEditTime: 2023-11-04 21:52:23
 * @FilePath: /my-site/src/components/Icon/test.vue
 * @Description: 
-->
<template>
    <div id="app">
        <h1>App组件</h1>
        <Icon v-for="(typeItem, i) in types" :key="i" :type="typeItem" />
    </div>
</template>

<script>
import Icon, { types } from "./"

export default {
    name: "App",
    components: {
      Icon
    },
    data() {
        return {
            types,
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
