/*
 * @Author: csh
 * @Date: 2023-10-17 22:00:01
 * @LastEditors: csh
 * @LastEditTime: 2023-11-02 20:55:54
 * @FilePath: /my-site/src/main.js
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
