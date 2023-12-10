<!--
 * @Author: csh
 * @Date: 2023-11-11 12:41:16
 * @LastEditors: csh
 * @LastEditTime: 2023-12-10 23:23:32
 * @FilePath: /my-site/src/App.vue
 * @Description: 
-->
<!-- csh -->
<template>
    <div class="app-container">
        <Layout>
            <template #left>
                <div class="side">
                    <SiteAside />
                </div>
            </template>
            <template #default>
                <RouterView />
            </template>
        </Layout>
    </div>
</template> 

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside"

export default {
    name: "App",
    components: {
      Layout, SiteAside
    },
    data() {
        return {
            
        }
    },
    methods: {
    }
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container {
    .self-fill(fixed);
    .side {
        width: 250px;
        height: 100%;
    }
}
</style>
