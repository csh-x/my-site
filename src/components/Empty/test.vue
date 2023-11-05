<!--
 * @Author: csh
 * @Date: 2023-11-05 14:42:28
 * @LastEditors: csh
 * @LastEditTime: 2023-11-06 00:06:25
 * @FilePath: /my-site/src/components/Empty/test.vue
 * @Description: Empty组件
-->
<template>
    <div class="test-container">
        <Empty />
    </div>
</template>

<script>
import Empty from "./";
export default {
    components: { Empty },
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