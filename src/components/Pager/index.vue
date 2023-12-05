<!--
 * @Author: csh
 * @Date: 2023-11-02 18:45:28
 * @LastEditors: csh
 * @LastEditTime: 2023-12-05 23:11:38
 * @FilePath: /my-site/src/components/Pager/index.vue
 * @Description: 翻页组件
-->
<template>
    <div class="pager-container" v-if="pagerNumber > 1">
        <a @click="handleClick(1)" :class="{ disabled: current === 1 }">|&lt;&lt;</a>
        <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }">&lt;&lt;</a>
        <a @click="handleClick(n)" v-for="(n, i) in numbers" :key="i" :class="{ active: n === current }">{{ n }}</a>
        <a @click="handleClick(current + 1)" :class="{ disabled: current === pagerNumber }">&gt;&gt;</a>
        <a @click="handleClick(pagerNumber)" :class="{ disabled: current === pagerNumber }">&gt;&gt;|</a>
    </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            default: 1,
        },
        total: {
            type: Number,
            default: 0,
        },
        limit: {
            type: Number,
            default: 10,
        },
        visibleNmber: {
            type: Number,
            default: 10,
        },
    },
    computed: {
        pagerNumber() {
          return Math.ceil(this.total / this.limit)
        },
        // 得到显示的最小数字  
        visibleMin() {
          let min = this.current - Math.floor(this.visibleNmber / 2)
          min < 1 && (min = 1)
          return min
        },
        visibleMax() {
            let max = this.visibleMin + this.visibleNmber - 1
            max > this.pagerNumber && (max = this.pagerNumber)
            return max
        },
        numbers() {
          let nums = []
          for(let i = this.visibleMin; i <= this.visibleMax; i++) {
            nums.push(i) 
          }
          return nums
        }
    },
    methods: {
      handleClick(newPage) {
        if(newPage < 1) {
            newPage = 1
        }
        if(newPage > this.pagerNumber) {
            newPage = this.pagerNumber
        }
        if(newPage === this.current) {
            return 
        }
        this.$emit("pageChange", newPage)
      }

    },
};
</script> 

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;

    a {
        color: @primary;
        margin: 0 6px;
        cursor: pointer;

        &.disabled {
            color: @gray;
            cursor: not-allowed;
        }

        &.active {
            color: @dark;
        }
    }
}
</style>