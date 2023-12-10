<!--
 * @Author: csh
 * @Date: 2023-11-05 14:42:28
 * @LastEditors: csh
 * @LastEditTime: 2023-12-10 22:31:56
 * @FilePath: /my-site/src/components/Empty/index.vue
 * @Description: 
-->
<template> 
    <div class="empty-container">
        <Icon type="empty" />
        <p>{{ text }}</p>
    </div>
</template>

<script>
import Icon from "../Icon";
export default {
    components: { Icon }, 
    props: {
        text: {
            type: String,
            default: "无数据",
        },
    }, 
    data() {
        return {
        };
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";

.empty-container {
    .psi-center();
    color: @gray;
    text-align: center;

    .icon-container {
        font-size: 72px;
    }
}
</style>