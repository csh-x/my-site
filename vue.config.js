/*
 * @Author: csh
 * @Date: 2023-10-17 22:00:01
 * @LastEditors: csh
 * @LastEditTime: 2023-12-11 23:52:42
 * @FilePath: /my-site/vue.config.js
 * @Description: 
 */
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.my-site.com"
      }
    }
  }
}