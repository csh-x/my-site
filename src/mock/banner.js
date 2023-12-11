/*
 * @Author: csh
 * @Date: 2023-12-11 23:49:16
 * @LastEditors: csh
 * @LastEditTime: 2023-12-11 23:54:44
 * @FilePath: /my-site/src/mock/banner.js
 * @Description: 测试mock数据,如果正确请求不到会被mock拦截
 */
import Mock from "mockjs"

Mock.mock("/api/banner", 'get', {
    code: 0,
    msg: '',
    data: [
        { name: 'csh' }
    ]
})