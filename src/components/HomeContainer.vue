<template>
    <div class="home">
        <!--        轮播图-->
        <div :style="{height:imageHeight +'px'}">
            <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item v-for="item in pageData.flash" :key="item.id">
                     <div class="demo-carousel" style="position: relative;background-color: red;overflow:hidden;">
                        <img :src="'http://hphc.yd-x.com'+item.pic" :style="{width: '100%',height: imageHeight+'px'}">
                        <div class="title" v-text="item.title" style="position: absolute;left: 0;bottom: 0;"></div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!--九宫格icon图标-->
        <div class="box-container">
            <div class="box-container-item" v-for="item in pageData.menu" v-bind:key="item.id" @click="clickIconAction(item)">
                <img v-bind:src="item.image" class="box-container-item-img">
                <div class="box-container-item-title" v-text="item.title.substring(0,5)">打印机</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "HomeContainer",
        data(){
            return {
                value:0,
                pageData:{},
                imageHeight:0,
            }
        },
        created(){
            const scale = 400/640;
            let imageHeight = window.screen.availWidth*scale;
            imageHeight = Math.ceil(imageHeight);
            this.imageHeight = imageHeight;
            this.getLunbotu();
        },
        methods:{
            getLunbotu(){
                // GET /someUrl 获取轮播数据
                this.$http.get('api.php/Home/index/index').then(
                    response => {
                        // get body data
                        if (response.body.flag == 1){
                            this.pageData = response.body.data;
                            console.log(this.pageData);
                        }else {
                            // Toast('加载轮播图失败');
                        }


                    }, response => {
                        // error callback
                        // Toast('加载轮播图失败');
                    }
                );
            },
            clickIconAction(item){
                console.log(item.skipkey);
                if(item.skipkey == '最新市场活动及信息公布'){
                    this.$router.push({
                        path: '/home/newlist'
                    })
                }else if(item.skipkey == '惠普服务(web)'){
                    this.$router.push({
                        path: '/home/photolist'
                    })
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    // 新闻列表
    .newslist{
        height: 80px;
        color: black;
        text-align: center;
        display: block;
        line-height: 80px;
        background-color:#9ed89e79;
        box-sizing: border-box;
        font-size: 32px;
        border: 1px solid #dddddd;/*no*/
    }
    .home{
        padding-top: 100px;
        padding-bottom: 137.5px;
        overflow-x: hidden;
        width: 10rem;
    }
    .content{
        width: 100%;
    }
    .title{
        font-size: 32px;
        padding: 10px;
        text-align: center;
        color: white;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
    }
/*    九宫格*/
    .box-container{
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;//换行方式
        background-color: transparent;
        .box-container-item{
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            width: 200px;
            height: 200px;
            margin-left: 37.5px;
            background-color: transparent;
            margin-top: 37.5px;
            .box-container-item-img{
                flex: 0 0 100px;
                width: 100px;
                height: 100px;
                background-color: transparent;
                border-radius: 50px;
            }
            .box-container-item-title{
                text-align: center;
                color: black;
                font-size: 32px;
                width: 100%;
                height: 40px;
                line-height: 40px;
                margin-top: 10px;
                background-color: transparent;
                font-weight: 400;
            }
        }
    }
</style>