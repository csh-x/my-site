<!--
 * @Author: csh
 * @Date: 2023-10-31 22:30:01
 * @LastEditors: csh
 * @LastEditTime: 2023-11-03 08:49:34
 * @FilePath: /my-site/src/components/Avatar/index.vue
 * @Description:  头像组件
-->
<template>
    <img
        class="avatar-container"
        :src="url"
        :style="{ width: size + 'px', height: size + 'px' }"
        alt="头像"
    />
</template>
  
  <script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
        size: {
            type: Number,
            default: 150,
        },
    },
    data() {
        return {};
    },
};
</script>
  
  <style scoped>
.avatar-container {
    border-radius: 50%;
    object-fit: cover;
    display: block;
}
</style>