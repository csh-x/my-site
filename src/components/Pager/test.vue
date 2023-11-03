<!--
 * @Author: csh
 * @Date: 2023-11-03 08:40:00
 * @LastEditors: csh
 * @LastEditTime: 2023-11-03 23:56:41
 * @FilePath: /my-site/src/components/Pager/test.vue
 * @Description: 
-->
<template>
    <div id="app">
        <h1>Pager-App</h1>
        <Pager @pageChange="handlePageChange" :total="total" :current="current" :visibleNmber="visibleNmber"/>
    </div>
</template>

<script>
import Pager from "./"

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
