<!--
 * @Author: csh
 * @Date: 2023-11-06 20:58:40
 * @LastEditors: csh
 * @LastEditTime: 2023-11-06 21:56:13
 * @FilePath: /my-site/src/components/ImageLoader/index.vue
 * @Description: 图片懒加载
-->
<template>
    <div class="image-loader-container">
        <img
            v-if="!everythingDone"
            class="placeholder"
            :src="placeholder"
            alt=""
        />
        <img
            @load="handlerLoad"
            :style="{ opacity: originOpacity, transition: `${duration}ms` }"
            :src="src"
            alt=""
        />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            default: 500,
        },
    },
    data() {
        return {
            originLoaded: false, //控制显隐
            everythingDone: false, // 一切尘埃落定
        };
    },
    computed: {
        originOpacity() {
            return this.originLoaded ? 1 : 0;
        },
    },
    methods: {
        handlerLoad() {
            this.originLoaded = true;
            setTimeout(() => {
                this.everythingDone = true;
                this.$emit('load')
            }, this.duration);
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.image-loader-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    img {
        .self-fill();
        object-fit: cover;
    }

    .placeholder {
        filter: blur(2vw);
    }

    .originShow {
        opacity: 1;
    }
}
</style>