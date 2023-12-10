<!--
 * @Author: csh
 * @Date: 2023-11-02 09:12:59
 * @LastEditors: csh
 * @LastEditTime: 2023-12-10 22:55:18
 * @FilePath: /my-site/src/components/Icon/index.vue
 * @Description: 图标组件
-->
<template>
    <i class="iconfont icon-container" :class="fontClass"></i>
</template>
  
  <script>
const classMap = {
    home: "icon-home",
    user: "icon-yonghuguanli",
    login: "icon-denglurizhi",
    empty: "icon-empty",
    success: "icon-success",
    error: "icon-Shapex",
    close: "iconguanbi",
    warn: "icon-warning",
    info: "icon-about",
    project: "icon-PROJECT",
    blog: "icon-joblog",
    code: "iconcode",
    about: "icon-about",
    weixin: "icon-weixin",
    mail: "icon-mail-fill",
    github: "icon-github-fill",
    qq: "icon-QQ-circle-fill",
    arrowUp: "iconiconfonticonfonti2copy",
    arrowDown: "iconiconfonticonfonti2",
    chat: "icon-liuyan",
};
export const types = Object.keys(classMap);
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
    },
    computed: {
        fontClass() {
            return classMap[this.type];
        },
    },
};
</script>
  
  <style scoped>
@import "//at.alicdn.com/t/c/font_4312462_gptsjx66baq.css";
.iconfont {
    color: inherit;
    font-size: inherit;
}
</style>