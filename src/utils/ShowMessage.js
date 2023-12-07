/*
 * @Author: csh
 * @Date: 2023-12-07 11:20:53
 * @LastEditors: csh
 * @LastEditTime: 2023-12-07 16:58:20
 * @FilePath: /my-site/src/utils/ShowMessage.js
 * @Description: 消息弹窗
 */

import getComponentRootDom from "./getComponentRootDom"
import Icon from "@/components/Icon"

/**
 * @author: csh
 * @description: 
 * @Date: 2023-12-07 11:22:29
 * @param {String} content: 消息内容
 * @param {String} type: 消息类型 success error warning info
 * @param {Number} duration: 多久消失
 * @param {HTMLElement} container: 放在那个容器的中间，不传则放到页面正中
 * @return {*}
 */
export default function(content, type, duration, container) {
    const div = document.createElement("div")
    // 获取传入组件渲染的根元素
    const iconDom = getComponentRootDom(Icon, {
        type
    })
    // 拼接渲染结构
    div.innerHTML = `<span>${iconDom.outerHTML}</span><div>${content}</div>`
    // 定位的外部容器
    if(!container) {
        container = document.body
    }
    else {
        // 容器position是否改动过
        if(getComputedStyle(container).postion === "static") {
            container.style.position = "relative"
        }
    }
    container.appendChild(div)
    console.log(div);
    
}