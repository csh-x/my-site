<!--
 * @Author: csh
 * @Date: 2023-12-24 21:15:53
 * @LastEditors: csh
 * @LastEditTime: 2023-12-24 23:46:25
 * @FilePath: /my-site/src/views/Home/CarouselItem.vue
 * @Description: 轮播图组件
-->
<template>
    <div class="carousel-container">
        <img :src="carouselData.bigImg" alt="" />
        <h1>{{ carouselData.title }}</h1>
        <h1>{{ carouselData.description }}</h1>
    </div>
</template>

<script>
export default {
    props: ["carouselData"],
};
</script>

<style lang="less" scoped>
.carousel-container {
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>