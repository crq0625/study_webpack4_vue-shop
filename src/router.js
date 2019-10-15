//路由抽离
import Vue from 'vue'
//1导入vuerouter
import VueRouter from 'vue-router'
//2手动安装VueRouter
Vue.use(VueRouter)

//3)导入组件
import HomeContainer from "./components/HomeContainer.vue";
import ShopContainer from "./components/ShopContainer.vue";
import SearchContainer from "./components/SearchContainer.vue";
import MemberContainer from "./components/MemberContainer.vue";
import NewsList from "./news/NewsList.vue"
import NewsInfo from "./news/newsinfo.vue"
//4)创建vueRouter 对象
var router = new VueRouter({
    routes:[
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shop',component:ShopContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newlist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
    ],
    linkActiveClass:'bar_item_select'
});
export default router;