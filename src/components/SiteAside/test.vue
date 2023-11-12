<!--
 * @Author: csh
 * @Date: 2023-11-12 23:33:22
 * @LastEditors: csh
 * @LastEditTime: 2023-11-13 00:07:43
 * @FilePath: /csh-plugin/Users/csh/my-site/src/components/SiteAside/test.vue
 * @Description:  侧边栏测试组件 
-->
<template>
    <div class="test-container">
        <SiteAside />
    </div>
</template>

<script>
import SiteAside from "/";
import "@/styles/global.less";
export default {
    components: {
        SiteAside,
    },
};
</script>

<style lang="less" scoped>
.test-container { 
    width: 250px;
    height: 550px;
    border: 1px solid;
    margin: 0 auto;
}
</style>