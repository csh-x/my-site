<!--
 * @Author: csh
 * @Date: 2023-11-02 09:09:19
 * @LastEditors: csh
 * @LastEditTime: 2023-11-11 00:12:12
 * @FilePath: /my-plugin/Users/csh/my-site/src/components/Avatar/test.vue
 * @Description: 计算属性test
-->
<template>
    <div id="app">
        <Avatar :url="url" :size="30" />
    </div>
</template>

<script>
import Avatar from "./";

export default {
    name: "App",
    components: {
        Avatar,
    },
    data() {
        return {
            url: "https://foruda.gitee.com/avatar/1677056537549909577/5511227_shiyiersan_1653900312.png!avatar30",
        };
    },
};
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
