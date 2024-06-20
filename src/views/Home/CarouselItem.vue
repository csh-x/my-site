<!--
 * @Author: csh
 * @Date: 2023-12-24 21:15:53
 * @LastEditors: csh
 * @LastEditTime: 2024-06-20 23:32:36
 * @FilePath: /my-site/src/views/Home/CarouselItem.vue
 * @Description: 轮播图组件
-->
<template>
    <div class="carousel-container">
        <ImageLoader :src="carouselData.bigImg" :placeholder="carouselData.midImg"/>
        <div class="title">{{ carouselData.title }}</div>
        <div class="desc">{{ carouselData.description }}</div> 
    </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
export default {
    props: ["carouselData"],
    components: { ImageLoader }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
    .title, .desc {
        position: absolute;
        letter-spacing: 3px;
        left: 30px;
        color: #fff;
        text-shadow: rgba(0,0,0,0.5) 1px 0, rgba(0,0,0,0.5) -1px 0, rgba(0,0,0,0.5) 0 1px, rgba(0,0,0,0.5) 0 -1px;
    }
    .title {
        font-size: 2em;
        top: calc(50% - 50px);
    }
    .desc {
        top: 50%;
        font-size: 1.2em;
        color: lighten(@gray, 20%);
    }
}
</style>