//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
//导入MUI 样式表和bootstrap用法相同。
import '../src/lib/mui/css/mui.min.css'
import './css/app.css'

//导入vue入口文件
import Vue from 'vue'

//导入mint-ui style样式。
import 'mint-ui/lib/style.css'

//导入app组件
import app from './App.vue'

//自定义路由
import router from "./router.js";

//导入mint-ui,
// import MintUI from 'mint-ui' //把所有的组件都导入了
//按照需要导入组件
import { Button } from 'mint-ui';
//使用vue.component 注册组件
Vue.component(Button.name, Button);


//把mintUI挂载到Vue中。
//Vue.use(MintUI) //把所有的组件都注册成全局的。

//vue实例
const vm = new Vue({
    el:'#app',
    data:{},
    render:C=>C(app),
    router //路由对象挂载到vm上
});
