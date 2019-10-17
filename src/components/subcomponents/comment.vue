<template>
    <div class="page">
        <h1>发表评论</h1>
        <textarea class="input-text" v-model="msg" placeholder="请火速入评论内容" maxlength="120"></textarea>
        <div class="submit-btn" @click="submitComentAction">发表评论</div>
        <div class="comment-content">
            <div class="comment-content-row" v-for="comment in comments" :key="comment.time">
                <div class="title">用户：{{comment.name}}，发表时间:{{comment.time}}</div>
                <div class="content">{{comment.content}}</div>
            </div>
            <div class="load-more-btn">
                加载更多
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    data(){
        return {
            pageIndex:1,
            msg:'',//评论框内容
            comments:[
                {name:'gather','time':'2019-10-15',content:"锄禾日当午，举头望明月，低头思故乡，窗外明月光，疑是地上霜。"},
                {name:'gather','time':'2019-10-16',content:"汗滴禾下土"},
                {name:'gather','time':'2019-10-17',content:"谁知盘中餐"},
                {name:'gather','time':'2019-10-18',content:"粒粒皆辛苦"},
                {name:'gather','time':'2019-10-19',content:"床前明月光"}
            ]//所有评论数据
        };
    },
    props:["id"],
    methods:{
        getComments(){
            //获取评论列表。
            this.$http.get('').then();
        },
        submitComentAction(){
            //发表评论
            if(this.msg.trim().length === 0){
                alert('请输入评论内容');
                return;
            }

            var content = {name:'gather',time:moment().format('YYYY-MM-DD HH:mm:ss'),content:this.msg};
            this.comments.unshift(content);
        }
    }
}
</script>

<style lang="less" scoped>
*{
    box-sizing: border-box;
}
.page{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 100px 0;
    .input-text{
        width: 98%;
        margin: 1%;
        border: 1px solid #181717;
        height: 100px;
        padding: 10px;
        box-shadow: none;
    }
    .submit-btn{
        height: 80px;
        text-align: center;
        line-height: 80px;
        background-color: #0096d6;
        color: white;
        font-size: 30px;
    }
    .comment-content{
        margin-top: 20px;
        .comment-content-row{
            font-size: 32px;
            color: black;
            .title{
                height: 60px;
                line-height: 60px;
                background:#dddddd;
            }
            .content{
                line-height: 42px;
                background:white;
                padding: 20px 20px;
            }
        }
        .load-more-btn{
            height: 80px;
            text-align: center;
            line-height: 80px;
            background-color: #0096d6;
            color: white;
            font-size: 30px;
        }
    }
}

</style>