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
    <!--图片内容-->
        <div class="container">
            <router-link class="container-row"
                         v-for="item in images"
                         :key="item.id"
                         :to="'/home/photoinfo/'+item.id"
            tag="div">
                <img v-lazy="item.img">
                <p v-text="item.txt"></p>
            </router-link>
        </div>
    </div>
</template>
<script>
    // require styles
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data(){
        return {
            images:[
                {
                    id:'1',
                    img:'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
                    txt:'iPhone 11国内热销中，5G版iPhone2020年秋季发布'
                },
                {
                    id:'2',
                    img:'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
                    txt:'国产手机的“逆袭”，非洲年销售额达200亿，远超苹果三星'
                },
                {
                    id:'3',
                    img:'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
                    txt:'高端大气上档次'
                },
                {
                    id:'4',
                    img:'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
                    txt:'高端大气上档次'
                },
                {
                    id:'5',
                    img:'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
                    txt:'高端大气上档次'
                },
                {
                    id:'6',
                    img:'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg',
                    txt:'高端大气上档次'
                }
            ],
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
            tags:['全部','推荐','热点','娱乐','最新','北京','社区','社会'],
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
    .container{
        .container-row{
            width: 100%;
            height: auto;
            position: relative;
            margin-bottom: 20px;
            background-color: #6d6d72;
            img{
                width: 100%;
                height: auto;
            }
            image[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
            }
            p{
                width: 100%;
                height: 100px;
                line-height: 40px;
                font-size: 32px;
                color: white;
                background-color: rgba(0,0,0,0.4);
                position: absolute;
                left: 0;
                bottom: 0;
                padding: 5px;
            }
        }

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