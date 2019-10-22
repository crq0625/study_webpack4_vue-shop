<template>
<div class="app-container">
    <!-- header -->
    <div class="header">
        <div class="title">惠普耗材百事通</div>
    </div>
    <!--body-->
    <transition>
        <router-view></router-view>
    </transition>
    <!-- tabbar -->
    <div class="tabBar">
        <router-link class="home tabbar-item" to="/home">
          <img src="http://hphc.yd-x.com/Public/ydxcms/img/home_gray.png">
          <div>首页</div>
        </router-link>
        <router-link class="member tabbar-item" to="/member">
          <img src="http://hphc.yd-x.com/Public/ydxcms/img/Supplies2Printer_gray.png">
          <div>会员</div>
        </router-link>
        <router-link class="car tabbar-item" to="/shop" id="shop">
          <img src="http://hphc.yd-x.com/Public/ydxcms/img/Printer2Supplies_gray.png">
          <div>购物车</div>
        </router-link>
        <router-link class="search tabbar-item" to="/search">
          <img src="http://hphc.yd-x.com/Public/ydxcms/img/myself_gray.png">
          <div>搜索</div>
        </router-link>
    </div>
</div>
</template>
<script>
export default{
  name:'APP'
}
</script>
<style lang="less">
    .app-container{
        overflow-x: hidden;
    }
    .header{
        position: fixed;
        left: 0;
        top: 0px;
        width: 100%;
        height: 100px;
        z-index: 1000;
        background-color: #0096d6;
        .title{
            font-size: 32px;
            height: 100px;
            width: 100%;
            text-align: center;
            line-height: 100px;
            color: white;
            font-weight: bold;
        }
    }

    .tabBar {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: white;
        border-top: solid 1px silver /*no*/;
        .tabbar-item {
            flex: 0 0 60px;
            height: 100px;
            padding-left: 20px;
            padding-right: 20px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            img {
                display: block;
                width: 48px;
                height: 48px;
            }
            div {
                width: 60px;
                height: 24px;
                font-size: 24px;
                color: #0096d6;
                text-align: center;
            }
        }

        //选中状态背景色
        .bar_item_select{
            background-color: transparent;
            //文字颜色
            div{
                color: #0096d6;
            }
        }
    }

    /*
        vue分为入场动画,和离场动画
        v-enter 这是入场动画开始之前的状态,即原状态 到 达到动画效果的时间段的起始点
        v-leave-to 是离场动画结束后的状态 即 动画效果还原到初始状态后的结束点
        注意下面的是类名,不要少写了点
        .v-enter,.v-leave-to{
            opacity: 0; //透明度,0代表完全透明,1完全不透明
        }
        .v-enter-active,.v-leave-active{
            transition: all 1s ease;  // all 所有样式, 0.5秒动画的执行时间,ease变速执行
        }
    */

    .v-enter{
        /*入场动画之前的位置*/
        opacity: 1;
        transform: translateX(100%);
    }
    .v-leave-to{
        /*出场动画动画结束的位置*/
        opacity: 1;
        transform: translateX(-100%);
        position: absolute;
    }
    // 定义动画
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s linear;
    }
</style>