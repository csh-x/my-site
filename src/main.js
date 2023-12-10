/*
 * @Author: csh
 * @Date: 2023-10-17 22:00:01
 * @LastEditors: csh
 * @LastEditTime: 2023-12-10 23:46:45
 * @FilePath: /my-site/src/main.js
 * @Description: 
 */
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from '@/router'

import ShowMessage from './utils/ShowMessage';
Vue.prototype.$showMessage = ShowMessage
 
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
