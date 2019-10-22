<template>
    <div>
        <div :style="{height:imageHeight +'px'}">
            <mt-swipe :auto="4000" :show-indicators="false">
                <mt-swipe-item v-for="item in swiperlist" :key="item.id">
                    <div class="demo-carousel" style="position: relative;background-color: red;overflow:hidden;">
                        <img :src="'http://hphc.yd-x.com'+item.pic" :style="{width: '100%',height: imageHeight+'px'}">
                        <div class="title" v-text="item.title" style="position: absolute;left: 0;bottom: 0;"></div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        name: "swiper",
        props:["swiperlist"],
        created(){
            const scale = 400/640;
            let imageHeight = window.screen.availWidth*scale;
            imageHeight = Math.ceil(imageHeight);
            this.imageHeight = imageHeight;
        }
    }
</script>

<style lang="less" scoped>
    .title{
        font-size: 32px;
        padding: 10px;
        text-align: center;
        color: white;
        background-color: rgba(0,0,0,0.7);
        width: 100%;
    }
</style>