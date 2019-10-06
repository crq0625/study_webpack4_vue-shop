//路由抽离
import Vue from 'vue'
//1导入vuerouter
import VueRouter from 'vue-router'
//2手动安装VueRouter
Vue.use(VueRouter)
//3)导入组件
import account from './main/Account.vue'
import goodlist from './main/GoodList.vue'
import login from './sub/login.vue'
import register from './sub/register.vue'
//4)创建vueRouter 对象
var router = new VueRouter({
    routes:[
        {
            path: '/account',
            component: account,
            children:[
                {path: 'login',component:login},
                {path: 'register',component:register}
            ]
        },
        { path: '/goodlist', component: goodlist },
    ]
});
export default router;