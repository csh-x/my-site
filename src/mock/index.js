// 真实接口开发完之后注释掉 mock 接口即可
import "./banner"


// 模拟延迟
import Mock from "mockjs"
Mock.setup({
    timeout: '1000-2000'
})