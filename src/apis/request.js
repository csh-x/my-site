/*
 * @Author: csh
 * @Date: 2023-12-12 00:14:22
 * @LastEditors: csh
 * @LastEditTime: 2023-12-12 00:22:05
 * @FilePath: /my-site/src/apis/request.js
 * @Description: axios 拦截器封装
 */
import axios from "axios"
import { ShowMessage } from "@/utils";

const ins = axios.create(); // 创建一个axios实例
ins.interceptors.response.use(function(res) {
    console.log('拦截器');
    if(res.data.code !== 0) {
        ShowMessage({
            content: res.data.msg,
            type: 'error',
            duration: 1500
        })
        return null
    }
    return res.data
})

export default ins