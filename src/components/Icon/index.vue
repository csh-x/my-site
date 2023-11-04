<!--
 * @Author: csh
 * @Date: 2023-11-02 09:12:59
 * @LastEditors: csh
 * @LastEditTime: 2023-11-04 21:52:55
 * @FilePath: /my-site/src/components/Icon/index.vue
 * @Description: 
-->
<template>
    <i class="iconfont icon-container" :class="fontClass"></i>
  </template>
  
  <script>
  const classMap = {
      home: 'icon-home',
      user: 'icon-yonghuguanli',
      login: 'icon-denglurizhi'
  } 
  export const types = Object.keys(classMap)
  export default {
      props: {
          type: {
              type: String,
              required: true,
          }
      },
      computed: {
          fontClass() {
              return classMap[this.type]
          }
      }
  }
  </script>
  
  <style scoped>
      @import "//at.alicdn.com/t/c/font_4312462_o381y74zahd.css";
      .iconfont {
          color: inherit;
          font-size: inherit;
      }
  </style>