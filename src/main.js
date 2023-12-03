/*
 * @Author: csh
 * @Date: 2023-10-17 22:00:01
 * @LastEditors: csh
 * @LastEditTime: 2023-12-04 00:00:53
 * @FilePath: /csh-plugin/Users/csh/my-site/src/main.js
 * @Description: 
 */
import Vue from 'vue';
import App from './App.vue';
import "./styles/global.less";
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
