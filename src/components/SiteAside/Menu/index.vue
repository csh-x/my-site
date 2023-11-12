<!--
 * @Author: csh
 * @Date: 2023-11-07 20:25:38
 * @LastEditors: csh
 * @LastEditTime: 2023-11-12 23:59:45
 * @FilePath: /csh-plugin/Users/csh/my-site/src/components/SiteAside/Menu/index.vue
 * @Description: 
-->
<template>
    <nav class="menu-container">
        <a
            v-for="item in list"
            :key="item.link"
            :href="item.link"
            :class="{ selected: isSelected(item) }"
        >
            <div class="icon">
                <Icon :type="item.icon" />
            </div>
            <span>{{ item.text }}</span>
        </a>
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
                { icon: "home", text: "首页", link: "/" },
                { icon: "blog", text: "文章", link: "/blog", startWith: true },
                { icon: "about", text: "关于我", link: "/about" },
                { icon: "project", text: "项目与效果", link: "/project" },
                { icon: "chat", text: "留言板", link: "/message" },
            ],
        };
    },
    methods: {
        isSelected(item) {
            let link = item.link.toLowerCase(); // 当前地址
            let currentPath = location.pathname.toLowerCase(); // 地址栏地址
            if (item.startWith) {
                return currentPath.startsWith(link);
            } else {
                return currentPath === link;
            }
        },
    },
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