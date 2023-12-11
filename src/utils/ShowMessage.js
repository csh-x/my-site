/*
 * @Author: csh
 * @Date: 2023-12-07 11:20:53
 * @LastEditors: csh
 * @LastEditTime: 2023-12-12 00:09:43
 * @FilePath: /my-site/src/utils/ShowMessage.js
 * @Description: 消息弹窗
 */

import { getComponentRootDom } from "@/utils"
import Icon from "@/components/Icon"

/**
 * @author: csh
 * @description: 
 * @Date: 2023-12-07 11:22:29
 * @param {String} content: 消息内容
 * @param {String} type: 消息类型 success error warn info
 * @param {Number} duration: 多久消失
 * @param {HTMLElement} container: 放在那个容器的中间，不传则放到页面正中
 * @return {*}
 */
import styles from "./ShowMessage.module.less"

export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const div = document.createElement("div")
    // 获取传入组件渲染的根元素
    const iconDom = getComponentRootDom(Icon, {
        type
    })
    // 拼接渲染结构
    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
    let typeClassName = styles[`message-${type}`]
    div.className = `${styles.message} ${typeClassName}`

    // 容器position是否改动过
    if (options.container) {
        if (getComputedStyle(container).postion === "static") {
            container.style.position = "relative"
        }
    }

    container.appendChild(div)

    // 将浏览器强制渲染
    div.clientHeight; // 读去宽高这些属性会触发浏览器 reflow

    // 将消息弹窗回到原来位置，默认是移动且透明的
    div.style.opacity = 1;
    div.style.transform = `translate(-50%, -50%)`

    // 等会消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-15px)`
        div.addEventListener("transitionend", function () {
            div.remove();
            options.callback && options.callback();
        }, { once: true })
    }, duration)
}