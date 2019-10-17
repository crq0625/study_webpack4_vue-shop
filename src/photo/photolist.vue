<template>
    <div class="page">
     <!-- 顶部滑动导航 -->
     <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in tags" :key="item" :class="{'active':swipe_index==index}">
            <div v-text="item"></div>
        </swiper-slide>
        <!-- Optional controls -->
    </swiper>
    </div>
</template>
<script>
    // require styles
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data(){
        return {
            swiperOption:{
                slidesPerView:'auto',
                freeMode:true,
                freeModeMomentumRatio:0.5,
                on:{
                    tap: event =>{
                        const swiper = this.$refs.mySwiper.swiper;
                        const selectIndex = swiper.clickedIndex;
                        const selectItem = swiper.slides[selectIndex];
                        this.swipe_index = selectIndex;
                        //
                       const swiperWidth  = swiper.width //页面宽度
                       const maxTranslate = swiper.maxTranslate(); //最大偏移量是负数，左边最大偏移量
                       const maxWidth     = -maxTranslate + swiperWidth / 2

                       const slideCenter  = selectItem.offsetLeft + selectItem.clientWidth / 2 //被点击slide元素中心点
                       console.log(slideCenter);

                       if (slideCenter <= swiperWidth / 2) {//中心点左边的，不需要移动
                            swiper.setTranslate(0)
                        } else if (slideCenter > maxWidth) {//移动到最左边
                            swiper.setTranslate(maxTranslate)
                        } else {
                           const  nowTlanslate = slideCenter - swiperWidth / 2
                            swiper.setTranslate(-nowTlanslate)
                        }
                    //    console.log(slideCenter);
                    },
                }
            },
            tags:['标签1','标签2','标签3','标签4','标签5','标签6','标签7','标签8','标签9'],
            swipe_index:0
        };
    },
    created(){
        //data和methods已经创建好
        //操作数据在这个方法中使用
    },
    mounted(){
        //所有DOM结构已经渲染好,并放到页面中后会执行，声明周期中的最后一个
        //操作元素需要在这个函数中执行
    },
    components:{
        swiper,
        swiperSlide
    },
    methods:{

    }

    
}
</script>
<style lang="less" scoped>
    .swiper-container{
        border-bottom:1px solid #f8f8f8;
    }
    .swiper-slide{
        height:60px;
        line-height:40px;
        text-align:center;
        padding: 10px 0;
        letter-spacing:4px;
        width: 90px;
        div{
            transition:all .3s ease;
        }
        
    }
    .active {
        div{
            // transform:scale(1.1);
            color:#FF2D2D;
            font-weight: 500;
        }
        &:after{
            content: '';
            width:90px;
            height: 4px;
            display: block;
            background-color: red;
        }
    }

    .page{
        width: 100vw;
        height: 100vh;
        padding: 100px 0;
        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>