/*
 * @Author: csh
 * @Date: 2023-12-03 23:59:56
 * @LastEditors: csh
 * @LastEditTime: 2023-12-04 00:10:01
 * @FilePath: /csh-plugin/Users/csh/my-site/src/router/index.js
 * @Description: 
 */
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes"

Vue.use(VueRouter);
const router = new VueRouter({
  // 路由配置规则
  routes,
  mode: 'history'
})

export default router;