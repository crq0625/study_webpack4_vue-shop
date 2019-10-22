//路由抽离
import Vue from 'vue'
//1导入vuerouter
import VueRouter from 'vue-router'
//2手动安装VueRouter
Vue.use(VueRouter)

//3)导入组件
import HomeContainer   from "./components/HomeContainer.vue";
import ShopContainer   from "./components/ShopContainer.vue";
import SearchContainer from "./components/SearchContainer.vue";
import MemberContainer from "./components/MemberContainer.vue";
import NewsList        from "./news/NewsList.vue"
import NewsInfo        from "./news/newsinfo.vue"
import PhotoList       from "./photo/photolist.vue"
import PhotoInfo       from "./photo/photoinfo.vue"
import GoodList        from "./goods/GoodList.vue";
import GoodInfo        from "./goods/GoodInfo.vue";
import GoodsComment    from "./goods/GoodsComment.vue";
import GoodsDesc       from "./goods/GoodsDesc.vue";
//4)创建vueRouter 对象
var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shop',component:ShopContainer},
        {path:'/search',component:SearchContainer},
        {path:'/home/newlist',component:NewsList},
        {path:'/home/newsinfo/:id',component:NewsInfo},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photoinfo/:id',component:PhotoInfo},
        {path:'/home/goodlist',component:GoodList},
        {path:'/home/goodinfo/:id',component:GoodInfo,name:'GoodInfo'},
        {path:'/home/goodscomment/:id',component:GoodsComment,name:'goodscomment'},
        {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'}
    ],
    // mode: 'history',
    linkActiveClass:'bar_item_select'//导航激活时候，增加的类
});
export default router;