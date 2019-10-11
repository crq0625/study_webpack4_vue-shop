<template>
<div>
    <!-- header -->
    <div class="header">
        <div class="title">惠普耗材百事通</div>
    </div>
    <!--body-->
    <router-view></router-view>
    <!-- tabbar -->
    <div class="tabBar">
        <router-link class="home tabbar-item" to="/home">
          <img src="./assets/100x100.png">
          <div>首页</div>
        </router-link>
        <router-link class="member tabbar-item" to="/member">
          <img src="./assets/100x100.png">
          <div>会员</div>
        </router-link>
        <router-link class="car tabbar-item" to="/shop">
          <img src="./assets/100x100.png">
          <div>购物车</div>
        </router-link>
        <router-link class="search tabbar-item" to="/search">
          <img src="./assets/100x100.png">
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
    .header{
        position: fixed;
        left: 0;
        top: 0px;
        width: 100%;
        height: 100px;
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
</style>