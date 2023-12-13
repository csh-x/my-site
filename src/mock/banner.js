/*
 * @Author: csh
 * @Date: 2023-12-11 23:49:16
 * @LastEditors: csh
 * @LastEditTime: 2023-12-13 23:24:28
 * @FilePath: /my-site/src/mock/banner.js
 * @Description: 测试mock数据,如果正确请求不到会被mock拦截
 */
import Mock from "mockjs"

Mock.mock("/api/banner", 'get', {
    code: 0,
    msg: '反正是报错了',
    data: [
        {
          id: "1",
          midImg: "http://mdrs.yuanjin.tech/img/20201031141507.jpg",
          bigImg: "http://mdrs.yuanjin.tech/img/20201031141350.jpg",
          title: "凛冬将至",
          description: "人唯有恐惧的时候方能勇敢",
        },
        {
          id: "2",
          midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
          bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
          title: "血火同源",
          description: "如果我回头，一切都完了",
        },
        {
          id: "3",
          midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
          bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
          title: "听我怒吼",
          description: "兰尼斯特有债必偿",
        },
      ]
})