/*
 * @Author: csh
 * @Date: 2023-12-11 23:09:16
 * @LastEditors: csh
 * @LastEditTime: 2023-12-11 23:57:50
 * @FilePath: /my-site/src/apis/test.js
 * @Description: axios 请求
 */
import axios from "axios"

async function getData() {
    const resp = await axios.get('/api/banner')
    console.log(resp);
}
getData()