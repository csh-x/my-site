/*
 * @Author: csh
 * @Date: 2023-12-11 23:09:16
 * @LastEditors: csh
 * @LastEditTime: 2023-12-24 23:16:50
 * @FilePath: /my-site/src/apis/test.js
 * @Description: axios 请求
 */
import request from "./request"

export async function getData() {
    return (await request.get('/api/banner')).data
}
