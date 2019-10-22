//导入MUI 样式表和bootstrap用法相同。


//导入vue入口文件
import Vue from 'vue'

//flexible.js
import 'lib-flexible'

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
// 定义全局变量
Vue.http.options.root = 'http://hphc.yd-x.com/';

import './lib/mui/css/mui.min.css'
//导入App.vue 根组件
import app from './App.vue'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//缩略图
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

// import {
//     Swipe, SwipeItem,
//     Navbar, TabItem,
//     Lazyload
// } from 'mint-ui'
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// Vue.use(Lazyload)
//格式化时间插件
import moment from 'moment';
//定义全局过滤器,第一个参数数是管道符前面的值
Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern);
});

//自定义路由
import router from "./router.js";

//vue实例
const vm = new Vue({
    el:'#app',
    data:{},
    render:C=>C(app),
    router //路由对象挂载到vm上
});
