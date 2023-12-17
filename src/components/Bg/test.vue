<!--
 * @Author: csh
 * @Date: 2023-11-05 14:42:28
 * @LastEditors: csh
 * @LastEditTime: 2023-12-17 22:56:25
 * @FilePath: /my-site/src/components/Bg/test.vue
 * @Description: background 测试
-->
<template>
    <div class="test-container">
        <Bg />
    </div>
</template>

<script>
import Bg from "./";
export default {
    components: { Bg },
};
</script>

<style lang="less" scoped>
    .test-container {
        width: 500px;
        height: 300px;
        border: 1px solid #ff00ed;
        position: relative;
    }
</style>