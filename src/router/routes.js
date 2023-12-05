/*
 * @Author: csh
 * @Date: 2023-12-04 00:02:11
 * @LastEditors: csh
 * @LastEditTime: 2023-12-05 22:54:07
 * @FilePath: /my-site/src/router/routes.js
 * @Description: 
 */
import Home from "@/views/Home";
import About from "@/views/About";
import Message from "@/views/Message";
import Project from "@/views/Project";
import Blog from "@/views/Blog";

export default [
    { name: 'Home', path: '/', component: Home },
    { name: 'About', path: '/about', component: About },
    { name: 'Blog', path: '/blog', component: Blog },
    { name: 'Message', path: '/message', component: Message },
    { name: 'Project', path: '/project', component: Project },
]