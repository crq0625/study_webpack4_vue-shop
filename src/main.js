import Vue from 'vue'
//导入app组件
import app from './app.vue'
import router from "./router.js";
//vue实例
const vm = new Vue({
    el:'#app',
    data:{},
    render:c=>c(app),
    router //路由对象挂载到vm上
});
/**
    <router-link to="/account">account</router-link>
    <router-link to="/goodList">goodlist</router-link>
    <router-view></router-view>
    需要写到app.vue中，因为index.html中的#app内容会被app.vue中的内容替换。
    因此需要把上面的内容放到app.vue里面。

     APP 组件是通过 vm 实例的render函数渲染出来的，render函数渲染出来的组件只能放到el:'#app'
     所指定的元素中。
     account.vue和GoodList.vue组件，是通过路由匹配监听到的，所以这两个组件只能展示到属于
     路由的<router-view></router-view>中去。
 **/