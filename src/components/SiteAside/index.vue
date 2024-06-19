<!--
 * @Author: csh
 * @Date: 2023-11-12 23:33:16
 * @LastEditors: csh
 * @LastEditTime: 2024-06-18 23:06:44
 * @FilePath: /my-site/src/components/SiteAside/index.vue
 * @Description: 侧边栏组件
-->
<template>
    <div class="site-aside-container">
        <Avatar url="https://avatars.githubusercontent.com/u/51896608?v=" />
        <h1 class="title">烨子</h1> 
        <Menu />
        <Contact />
        <p class="footer">备案号：15645</p>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
    components: {
        Avatar,
        Menu,
        Contact,
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
    width: 100%;
    height: 100%;
    background: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-container {
        margin: 0 auto;
    }
    .title {
        font-size: 1.2em;
        text-align: center;
        color: #fff;
    }
    .footer {
        text-align: center;
        font-size: 14px;
    }
}
</style>