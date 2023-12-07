/*
 * @Author: csh
 * @Date: 2023-12-07 16:34:18
 * @LastEditors: csh
 * @LastEditTime: 2023-12-07 16:39:16
 * @FilePath: /my-site/src/utils/getComponentRootDom.js
 * @Description: 获取传入节点的 dom根元素
 */

import Vue from "vue"

export default function getComponentRootDom(comp, props){
    const vm = new Vue({
      render: h => h(comp, {props})
    })
    vm.$mount();
    return vm.$el;
  }