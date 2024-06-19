<!--
 * @Author: csh
 * @Date: 2023-11-23 22:37:26
 * @LastEditors: csh
 * @LastEditTime: 2024-06-19 23:38:52
 * @FilePath: /my-site/src/views/Home/index.vue
 * @Description: 主页
-->
<template>
    <div class="home-container" ref="container" @wheel="handleWheel">
        <!-- <Bg /> -->
        <!-- 轮播图 -->
        <ul
            class="carousel-container"
            :style="{ marginTop }"
            @transitionend="handleTranstionEnd"
        >
            <li v-for="item in banners" :key="item.id">
                <CarouselItem :carouselData="item" />
            </li>
        </ul>

        <!-- 上下箭头 -->
        <div
            v-show="index !== 0"
            class="icon icon-up"
            @click="switchTo(index - 1)"
        >
            <Icon type="arrowUp" />
        </div>
        <div
            v-show="index !== banners.length - 1"
            class="icon icon-down"
            @click="switchTo(index + 1)"
        >
            <Icon type="arrowDown" />
        </div>

        <!--轮播图点 -->
        <ul class="course">
            <li
                @click="switchTo(i)"
                :class="{ active: index === i }"
                v-for="(item, i) in banners"
                :key="item.id"
            ></li>
        </ul>
    </div>
</template>

<script>
// import Bg from "@/components/Bg"
import CarouselItem from "./CarouselItem.vue";
import Icon from "@/components/Icon";
import { getData } from "@/apis/test";
export default {
    components: {
        // Bg,
        CarouselItem,
        Icon,
    },
    data() {
        return {
            banners: [],
            index: 1, // 当前展示的第几个图片
            containerHeight: 0,
            switching: true,
        };
    },
    computed: {
        marginTop() {
            return -this.index * this.containerHeight + "px";
        },
    },
    mounted() {
        this.containerHeight = this.$refs.container.clientHeight;
    },
    async created() {
        this.banners = await getData();
        console.log(this.banners);
    },
    methods: {
        // 切换轮播图
        switchTo(index) {
            this.index = index;
        },

        handleWheel(e) {
            if (this.switching) {
                return;
            }
            if (e.deltaY < -5 && this.index > 0) {
                this.switching = true; //滚动中
                console.log("上");
                this.index--;
            }
            if (e.deltaY > 5 && this.index < this.banners.length - 1) {
                this.switching = true; //滚动中
                console.log("下");
                this.index++;
            }
        },

        handleTranstionEnd() {
            this.switching = false; //滚动结束
        },
    },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";

.home-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .carousel-container {
        width: 100%;
        height: 100%;
        transition: 500ms;
        li {
            width: 100%;
            height: 100%;
        }
    }
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .icon {
        .psi-center();
        font-size: 30px;
        @gap: 15px;
        transform: translateX(-50%);
        cursor: pointer;
        &-up {
            position: absolute;
            top: @gap;
            animation: jump-up 3s infinite;
        }
        &-down {
            position: absolute;
            top: auto;
            bottom: @gap;
            animation: jump-down 3s infinite;
        }
        @jump: 15px;
        @keyframes jump-up {
            0% {
                transform: translate(-50%, @jump);
            }
            50% {
                transform: translate(-50%, -@jump);
            }
            100% {
                transform: translate(-50%, @jump);
            }
        }
        @keyframes jump-down {
            0% {
                transform: translate(-50%, -@jump);
            }
            50% {
                transform: translate(-50%, @jump);
            }
            100% {
                transform: translate(-50%, -@jump);
            }
        }
    }

    .course {
        // .psi-center();
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 15px;
        li {
            width: 10px;
            height: 10px;
            border: 1px solid white;
            border-radius: 25px;
            margin: 5px 0;
            &:hover {
                cursor: pointer;
            }
            &.active {
                background: white;
            }
        }
    }
}
</style>