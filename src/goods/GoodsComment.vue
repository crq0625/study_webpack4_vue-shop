<template>
    <div class="page">
        <comment></comment>
    </div>
</template>

<script>
    import comment from "../components/subcomponents/comment.vue";
    export default {
        name: "GoodsComment",
        components:{
            comment
        }
    }
</script>

<style lang="less" scoped>
    .page{
        padding: 100px 0;
    }
</style>