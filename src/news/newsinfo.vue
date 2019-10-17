<template>
    <div class="page">
        <!-- 标题 -->
        <p class="info-title" v-text="info.title"></p>
        <!-- 内容 -->
        <p class="info-content" v-html="info.content"></p>
        <!-- 评论 -->
        <comment-box :id="id"></comment-box>
    </div>
</template>
<script>
import comment from '../components/subcomponents/comment.vue'
    export default {
        data(){
            return{
                id:this.$route.params.id,//获取URL传过来的值。
                info:{}
            }
        },
        created(){
            this.getNewsInfo();
        },
        methods:{
            getNewsInfo(){
                this.$http.get('api.php/home/index/NewsInfo/id/'+this.id).then(result=>{
                    console.log(result.body);
                    if(result.body.flag == 1){
                            this.info = result.body.data.article;
                    }else{

                    }
                });
            }
        },
        components:{
            //注册子组件内容
            'comment-box':comment
        }
    }
</script>

<style lang="less" scoped>
*{
    box-sizing: border-box;
}
.page{
    widows: 100vw;
    height: 100vh;
    position: relative;
    padding: 100px 0;
    .info-title{
        color: black;
        font-weight: 500;
        text-align: center;
        font-size: 40px;
        margin: 10px 0;
    }
}
</style>