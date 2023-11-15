<!--
 * @Author: csh
 * @Date: 2023-11-15 22:15:00
 * @LastEditors: csh
 * @LastEditTime: 2023-11-15 23:08:26
 * @FilePath: /csh-plugin/Users/csh/my-site/src/components/Layout/test.vue
 * @Description: 
-->
<template>
    <div class="test-container">
        <Layout>
            <!-- <template #left>
                <div class="left">
                    左边元素左边元素左边元素左边元素左边元素左边元素左边元素左边元素左边元素左边元素左边元素左边元素
                </div>
            </template> -->
            <div class="main">
                中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容中间内容
            </div>
            <template #right>
                <div class="right">
                    右边元素右边元素右边元素右边元素右边元素右边元素右边元素右边元素右边元素右边元素右边元素右边元素右边元素
                </div>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from "./";
export default {
    components: {
        Layout,
    },
};
</script>

<style scoped>
.test-container {
    width: 80%;
    height: 600px;
    border: 1px solid red;
    margin: 0 auto;
    white-space: nowrap;
}
.left {
    width: 200px;
    height: 100%;
    background: cyan;
}
.main {
    width: 100%;
    height: 100%;
    background: yellowgreen;
}
.right {
    width: 100px;
    height: 100%;
    background: yellow;
}
</style>