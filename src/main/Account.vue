<template>
    <div>
        <h1>这是account 组件</h1>
        <router-link to="/account/login">登陆</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style lang="less" scoped>
/** 普通标签只支持普通的样式，如果想要启用scss或者less需要为style元素试着lang属性*/
    body{
        div{
            font-style: italic;
        }
    }
</style>