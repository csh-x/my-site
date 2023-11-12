<!--
 * @Author: csh
 * @Date: 2023-11-06 22:01:37
 * @LastEditors: csh
 * @LastEditTime: 2023-11-12 22:52:09
 * @FilePath: /csh-plugin/Users/csh/my-site/src/components/SiteAside/Menu/test.vue
 * @Description: 
-->
<template>
    <div class="test-container">
        <Menu />
    </div>
</template>

<script>
import Menu from "./";

export default {
    components: {
        Menu,
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";

.test-container {
    width: 300px;
    height: 600px;
    margin: 0 auto;
    background: black;
}
</style>