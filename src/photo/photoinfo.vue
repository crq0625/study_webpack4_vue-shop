<template>
    <div class="page">
        <div class="paeg-header">
            <h3 v-text="data.title"></h3>
            <div class="time_and_click">
                <div>发表时间：<span v-text="data.time"></span></div>
                <div>查看次数：<span v-text="data.click"></span></div>
            </div>
        </div>
        <!--   缩略图     -->
        <div class="page-thumb">
            <img :src="item" preview="1" preview-text="" v-for="item in data.images">
        </div>
         <!--        内容-->
        <div v-text="data.title"></div>
        <!--        评论内容-->
        <comment-box></comment-box>
    </div>
</template>

<script>
    import comment from '../components/subcomponents/comment.vue'
    export default {
        name: "phptoinfo",
        data(){
            return {
                id:this.$route.params.id,
                data:{
                    'title':'国产手机的“逆袭”，非洲年销售额达200亿，远超苹果三星',
                    'time':'2019-10-10',
                    'click':'19',
                    images:[
                        'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
                        'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
                        'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
                        'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
                        'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
                        'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
                    ]
                }
            }
        },
        created(){
          console.log(this.id)
        },
        methods:{

        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style lang="less" scoped>
.page{
    padding: 100px 10px;
    .paeg-header{
        .time_and_click{
            margin-top: 20px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            justify-items: center;
        }
    }
    .page-thumb{
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-content: center;
        img{
            margin: 10px;
            flex: 1 1 200px;
            width: 200px;
            height: 200px;
            box-shadow: 0 0 8px #999999;
        }
    }

}
</style>