<!--
 * @Author: csh
 * @Date: 2023-10-31 22:30:01
 * @LastEditors: csh
 * @LastEditTime: 2023-11-02 08:54:51
 * @FilePath: /my-site/src/components/Avatar.vue
 * @Description:  头像组件
-->
<template>
  <div>
    <img class="avatar-img" :src=url :style="{ width: size + 'px', height: size + 'px'}" alt="头像">
  </div>
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
        return {

        }
    }
}
</script>

<style scoped>
.avatar-img {
    border-radius: 50%;
    object-fit: cover;
    display: block ;
}
</style>