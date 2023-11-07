<!--
 * @Author: csh
 * @Date: 2023-11-06 22:01:37
 * @LastEditors: csh
 * @LastEditTime: 2023-11-07 20:05:46
 * @FilePath: /my-site/src/components/Contact/test.vue
 * @Description: 
-->
<template>
    <div class="test-container">
        <Contact />
    </div>
</template>

<script>
import Contact from "./";

export default {
    components: {
        Contact,
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
    background: black;
    margin: 0 auto;
    padding-top: 200px;
}
</style>