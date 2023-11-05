<!--
 * @Author: csh
 * @Date: 2023-11-02 09:12:59
 * @LastEditors: csh
 * @LastEditTime: 2023-11-05 16:17:46
 * @FilePath: /my-site/src/components/Icon/index.vue
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
    blog: "iconblog",
    code: "iconcode",
    about: "iconset_about_hov",
    weixin: "iconweixin",
    mail: "iconemail",
    github: "icongithub",
    qq: "iconsign_qq",
    arrowUp: "iconiconfonticonfonti2copy",
    arrowDown: "iconiconfonticonfonti2",
    chat: "iconliuyan",
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
@import "//at.alicdn.com/t/c/font_4312462_n7exqe3nn1.css";
.iconfont {
    color: inherit;
    font-size: inherit;
}
</style>