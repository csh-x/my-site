/*
 * @Author: csh
 * @Date: 2023-12-11 23:09:16
 * @LastEditors: csh
 * @LastEditTime: 2023-12-13 23:37:38
 * @FilePath: /my-site/src/apis/test.js
 * @Description: axios 请求
 */
import request from "./request"

export async function getData() {
    return await request.get('/api/banner')
}
