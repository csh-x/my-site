<!--
 * @Author: csh
 * @Date: 2023-11-02 09:12:59
 * @LastEditors: csh
 * @LastEditTime: 2023-11-12 23:08:33
 * @FilePath: /csh-plugin/Users/csh/my-site/src/components/Icon/index.vue
 * @Description: 
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
    success: "iconzhengque",
    error: "iconcuowu",
    close: "iconguanbi",
    warn: "iconjinggao",
    info: "iconxinxi",
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
@import "//at.alicdn.com/t/c/font_4312462_aru4v7xdcx.css";
.iconfont {
    color: inherit;
    font-size: inherit;
}
</style>