<!--
 * @Author: csh
 * @Date: 2023-11-07 20:25:38
 * @LastEditors: csh
 * @LastEditTime: 2023-12-05 22:53:55
 * @FilePath: /my-site/src/components/SiteAside/Menu/index.vue
 * @Description: 
-->
<template>
    <nav class="menu-container">
        <RouterLink
        <RouterLink
            v-for="item in list"
            :key="item.link"
            :to="{ name: item.name }"
            :exact="item.exact"
            active-class="selected"
            exact-active-class=""
        >
            <div class="icon">
                <Icon :type="item.icon" />
            </div>
            <span>{{ item.text }}</span>
        </RouterLink>
        </RouterLink>
    </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: {
        Icon,
    },
    data() {
        return {
            list: [
                { icon: "home", exact: true, text: "首页", name: "Home" },
                { icon: "blog", exact: false, text: "文章", name: "Blog", startWith: true },
                { icon: "about", exact: true, text: "关于我", name: "About" },
                { icon: "project", exact: true, text: "项目与效果", name: "Project" },
                { icon: "chat", exact: true, text: "留言板", name: "Message" },
            ],
        };
    }
};
</script>

<style lang="less" scoped>
@import "~@/styles/global.less";
@import "~@/styles/var.less";
.menu-container {
    color: @gray;
    a {
        &.selected {
            background: darken(@words, 3%);
        }
        display: block;
        padding: 12px 50px;
        display: flex;
        align-items: center;
        .icon {
            width: 24px;
        }
        &:hover {
            color: white;
        }
    }
}
</style>