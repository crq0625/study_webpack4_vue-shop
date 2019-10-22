<template>
    <div class="page">
        <!--   小球     -->
        <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!--        轮播退-->
        <div class="mui-card">
            <!--内容区-->
            <div class="mui-card-content">
                <swiper :swiperlist="pageData.flash"></swiper>
            </div>
        </div>
        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header" style="padding-top: 5px;">
                小米（Mi）小米Note 16G双网通版
            </div>
            <!--内容区-->
            <div class="mui-card-content">
                <div style="margin-top: 5px;">
                    <span>市场价:</span><span>￥2600</span>
                    <span style="margin-left: 50px;color: red;">销售价:</span><span>￥2600</span>
                </div>
                <div style="margin-top: 5px;">
                    <span>购买数量:</span>
                    <div class="mui-numbox">
                        <!-- "-"按钮，点击可减小当前数值 -->
                        <button class="mui-btn mui-numbox-btn-minus" type="button" @click="clickNumboxBtnAction(-1)">-</button>
                        <input class="mui-numbox-input" type="number" value="1" v-model="productCount"/>
                        <!-- "+"按钮，点击可增大当前数值 -->
                        <button class="mui-btn mui-numbox-btn-plus" type="button" @click="clickNumboxBtnAction(1)">+</button>
                    </div>
                </div>
                <div style="margin-top: 5px;">
                    <button type="button" class="mui-btn mui-btn-danger" @click="buyBtnAction(1)">立即购买</button>
                    <button type="button" class="mui-btn mui-btn-royal"  @click="buyBtnAction(2)">加入购物车</button>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header">
                商品参数
            </div>
            <!--内容区-->
            <div class="mui-card-content">
                <div style="margin-top: 5px;">商品货号:109833333</div>
                <div style="margin-top: 5px;">库存情况:充足</div>
                <div style="margin-top: 5px;">上架时间:2019-10-10</div>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <div class="mui-card-footer" style="margin-top: 10px;display: block;">
                <button type="button" data-loading-icon="mui-spinner mui-spinner-custom" class="mui-btn mui-btn-primary" style="width: 100%;" @click="goDescAction">图文介绍</button>
                <button type="button" data-loading-icon="mui-spinner mui-spinner-custom" class="mui-btn mui-btn-grey" style="width: 100%;margin-top: 10px;" @click="goComment">商品评论</button>
            </div>
        </div>

    </div>
</template>

<script>
    import swiper from "../components/subcomponents/swiper.vue";

    export default {
        name: "GoodInfo",
        data(){
            return {
                ballFlag:false,
                value:0,
                productCount:1,
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
        components:{
            swiper
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
            clickNumboxBtnAction(type){
                let productCount = this.productCount;
                if (type == -1){
                    productCount = productCount - 1;
                }else {
                    productCount = productCount + 1;
                }
                if (productCount <=0){
                    productCount = 1;
                }
                this.productCount = productCount;
            },
            buyBtnAction(type){
                if (type == 1){
                    console.log('立即购买')
                }else {
                    this.ballFlag = !this.ballFlag;
                }
            },
            goDescAction(){
                this.$router.push({name:'goodsdesc',params:{id:1}});
            },
            goComment(){
                this.$router.push({name:'goodscomment',params:{id:1}});
            },
            beforeEnter(el){
                //元素开始动画之前的起始样式
                el.style.transform = "translate(0,0)"
            },
            enter(el,done){
                //动画的结束状态
                el.offsetWidth;
                //获取小球的位置
                const ballPosition  = this.$refs.ball.getBoundingClientRect();
                //获取购物车在页面中的位置。
                const shopPosition  = document.getElementById('shop').getBoundingClientRect();
                const  xDist = shopPosition.left - ballPosition.left;
                const  YDist = shopPosition.top  - ballPosition.top;
                console.log(xDist);
                console.log(YDist);
                //vue数据绑定渲染,双向绑定使用vue渲染。
                //dom根组件没关系，子组件可以拿到父组件里面的所有内容。
                el.style.transform  = "translate("+xDist+"px,"+YDist+"px)"
                el.style.transition = "all 1s cubic-bezier(.53,.16,.95,.64)"
                done();
            },
            afterEnter(el){
                //表示入场动画完成之后的状态
                this.ballFlag = !this.ballFlag;
            },
            getSelectedCount(count){
                //子组件调用方法
            }
        }
    }
</script>

<style lang="less" scoped>
    .page{
        padding: 100px 0;
        .ball{
            width: 16px;
            height: 16px;
            border-radius: 50px;
            background-color: red;
            position: absolute;
            z-index: 1000;
            top: 9.1rem;
            left: 2.3rem;
        }
    }
</style>