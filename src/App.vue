<!--
 * @Author: csh
 * @Date: 2023-11-11 12:41:16
 * @LastEditors: csh
 * @LastEditTime: 2023-11-11 12:55:00
 * @FilePath: /my-plugin/Users/csh/my-site/src/App.vue
 * @Description: 
-->
<!-- csh -->
<template>
    <div id="app">
        <h1>App组件</h1>
        <Pager @pageChange="handlePageChange" :total="total" :current="current" :visibleNmber="visibleNmber"/>
    </div>
</template>

<script>
import Pager from "./components/Pager"

export default {
    name: "App",
    components: {
      Pager
    },
    data() {
        return {
            total: 300,
            visibleNmber: 15,
            current: 13,
        };
    },
    methods: {
        handlePageChange(newPage) {
            console.log(newPage);
            this.current = newPage
        }
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
