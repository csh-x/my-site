/*
 * @Author: csh
 * @Date: 2023-12-04 00:02:11
 * @LastEditors: csh
 * @LastEditTime: 2023-12-04 00:04:57
 * @FilePath: /csh-plugin/Users/csh/my-site/src/router/routes.js
 * @Description: 
 */
import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Blog from "@/views/Blog";

export default [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/blog', component: Blog },
    { path: '/message', component: Message },
    { path: '/project', component: Project },
]