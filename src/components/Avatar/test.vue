<!--
 * @Author: csh
 * @Date: 2023-11-02 09:09:19
 * @LastEditors: csh
 * @LastEditTime: 2023-11-03 08:50:09
 * @FilePath: /my-site/src/components/Avatar/test.vue
 * @Description: 计算属性test
-->
<template>
    <div id="app">
    </div>
</template>

<script>

export default {
    name: "App",
    components: {
        Avatar,
    },
    computed: {
        // 计算属性只有依赖项修改的时候才会调用，有缓存
        fullName: {
            get() {
              console.log('调用了计算属性getter');
             },
            set(val) {},
        },
        fullName() {
            console.log('fullName called');
            
        }
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
