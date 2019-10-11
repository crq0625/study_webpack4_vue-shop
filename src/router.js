//路由抽离
import Vue from 'vue'
//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)

//1导入vuerouter
import VueRouter from 'vue-router'
//2手动安装VueRouter
Vue.use(VueRouter)

//3)导入组件
import HomeContainer from "./components/HomeContainer.vue";
import ShopContainer from "./components/ShopContainer.vue";
import SearchContainer from "./components/SearchContainer.vue";
import MemberContainer from "./components/MemberContainer.vue";

//4)创建vueRouter 对象
var router = new VueRouter({
    routes:[
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shop',component:ShopContainer},
        {path:'/search',component:SearchContainer},
    ],
    linkActiveClass:'bar_item_select'
});
export default router;