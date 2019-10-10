//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
//导入MUI 样式表和bootstrap用法相同。
import '../src/lib/mui/css/mui.min.css'
import './css/app.css'

//导入vue内容。
import Vue from 'vue'
//导入app组件
import app from './app.vue'

//自定义路由
import router from "./router.js";

//导入mint-ui,
// import MintUI from 'mint-ui' //把所有的组件都导入了
//按照需要导入组件
import { Button } from 'mint-ui';
//使用vue.component 注册组件
Vue.component(Button.name, Button);

//导入mint-ui style样式。
import 'mint-ui/lib/style.css'



//把mintUI挂载到Vue中。
//Vue.use(MintUI) //把所有的组件都注册成全局的。

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