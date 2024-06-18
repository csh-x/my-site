/*
 * @Author: csh
 * @Date: 2023-11-11 12:41:16
 * @LastEditors: csh
 * @LastEditTime: 2023-12-17 23:01:54
 * @FilePath: /my-site/src/main.js
 * @Description: 
 */
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from '@/router'

import ShowMessage from './utils/ShowMessage';
Vue.prototype.$showMessage = ShowMessage

import "./mock"
// import "./apis/test"
 
// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
