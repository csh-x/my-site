<!--
 * @Author: csh
 * @Date: 2023-11-06 22:01:37
 * @LastEditors: csh
 * @LastEditTime: 2023-11-07 20:28:11
 * @FilePath: /my-site/src/components/Menu/test.vue
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
    width: 400px;
    height: 600px;
    border: 1px solid red;
}
</style>