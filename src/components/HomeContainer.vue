<template>
    <div class="home">
            <Carousel v-model="value" :height="imageHeight">
                <Carousel-item v-for="item in pageData.flash" :key="item.id">
                    <div class="demo-carousel" style="position: relative;background-color: red;">
                        <img :src="'http://hphc.yd-x.com'+item.pic" style="width: 100%;height: auto">
                        <div class="title" v-text="item.title" style="position: absolute;left: 0;bottom: 0;"></div>
                    </div>
                </Carousel-item>
            </Carousel>
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
            const scale = 640/400;
            let imageHeight = window.screen.availWidth/scale;
            imageHeight = Math.ceil(imageHeight)*window.devicePixelRatio;
            this.imageHeight = imageHeight;
            this.getLunbotu();
        },
        methods:{
            getLunbotu(){
                // GET /someUrl 获取轮播数据
                this.$http.get('http://hphc.yd-x.com/api.php/Home/index/index').then(
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
            }
        }
    }
</script>

<style lang="less" scoped>
    h3{
        padding-top: 100px;
    }
    .home{
        padding-top: 100px;
    }
    .content{
        width: 100%;
    }
    .mint-swipe {
        .mint-swipe-item {
            &:nth-child(1){
              background-color: red;
            }

             &:nth-child(2){
                 background-color: blue;
             }

            &:nth-child(3){
                background-color: yellow;
            }
        }
    }
    .title{
        font-size: 32px;
        padding: 10px;
        text-align: center;
        color: white;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
    }
</style>