<template>
<div>
    <h1>webpack 编译 vue</h1>
    <mt-button type="primary" @click="show">primary125-按钮</mt-button> //组件
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>
    <router-link to="/account">account</router-link>
    <router-link to="/goodList">goodlist</router-link>
    <router-view></router-view>
</div>
</template>
<script>
    import { Toast } from 'mint-ui';
export default {
    data(){
        return {};
    },
    methods:{
        show(){
            Toast({
                message:'这是消息',
                duration:-1,
                position:'top',
                iconClass:'glyphicon glyphicon-heart',//设置图标,需要自带
                className:'myToast',//自定义toast样式，需要提供类名
            });
        }
    }
}
</script>
<style>

</style>