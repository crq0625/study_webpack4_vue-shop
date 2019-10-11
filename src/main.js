//导入MUI 样式表和bootstrap用法相同。


//导入vue入口文件
import Vue from 'vue'

//flexible.js
import 'lib-flexible'

//导入App.vue 根组件
import app from './App.vue'

//自定义路由
import router from "./router.js";

//vue实例
const vm = new Vue({
    el:'#app',
    data:{},
    render:C=>C(app),
    router //路由对象挂载到vm上
});
