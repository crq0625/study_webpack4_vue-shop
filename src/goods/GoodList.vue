<template>
    <div class="page">
        <div class="list">
            <div class="list-row">
                <div class="list-row-item" @click="clickProductAction">
                    <div class="list-row-top">
                        <img class="image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571506059850&di=7f2eddafd6cfa91c8fcfd9184d5bc11a&imgtype=0&src=http%3A%2F%2Figx.4sqi.net%2Fimg%2Fgeneral%2F600x600%2F24566060_uMxI_ciQGi5PrZDlPkRCJy2YzmB5p6UC-gk29rUglYM.jpg">
                        <div class="title">小米（MI）小米Note 16G双向高配版</div>
                    </div>
                    <div class="list-row-bottom">
                        <div class="row"><div>￥2199</div><div class="origin-price">￥2999</div></div>
                        <div class="count"><div>热卖中</div><div>剩100件</div></div>
                    </div>
                </div>
                <div class="list-row-item">
                    <div class="list-row-top">
                        <img class="image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571506059850&di=7f2eddafd6cfa91c8fcfd9184d5bc11a&imgtype=0&src=http%3A%2F%2Figx.4sqi.net%2Fimg%2Fgeneral%2F600x600%2F24566060_uMxI_ciQGi5PrZDlPkRCJy2YzmB5p6UC-gk29rUglYM.jpg">
                        <div class="title">小米（MI）小米Note 16G双向高配版</div>
                    </div>
                    <div class="list-row-bottom">
                        <div class="row"><div>￥2199</div><div class="origin-price">￥2999</div></div>
                        <div class="count"><div>热卖中</div><div>剩100件</div></div>
                    </div>
                </div>
                <div class="list-row-item">
                    <div class="list-row-top">
                        <img class="image" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571506059850&di=7f2eddafd6cfa91c8fcfd9184d5bc11a&imgtype=0&src=http%3A%2F%2Figx.4sqi.net%2Fimg%2Fgeneral%2F600x600%2F24566060_uMxI_ciQGi5PrZDlPkRCJy2YzmB5p6UC-gk29rUglYM.jpg">
                        <div class="title">小米（MI）小米Note 16G双向高配版</div>
                    </div>
                    <div class="list-row-bottom">
                        <div class="row"><div>￥2199</div><div class="origin-price">￥2999</div></div>
                        <div class="count"><div>热卖中</div><div>剩100件</div></div>
                    </div>
                </div>

            </div>
            <div class="more-btn">加载更多</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodList",
        data(){
            return{}
        },
        methods:{
            clickProductAction(){
                this.$router.push({name:'GoodInfo',params:{id:123}});
            }
        }
    }
</script>

<style lang="less" scoped>
    .page{
        padding: 100px 0;
        width: 100%;
        height: auto;
        overflow-x: hidden;
        overflow-y: auto;

        /*商品行*/
        .list{
            .list-row{
                width: 100%;
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-start;
                align-items: flex-start;
                align-content: flex-start;
                padding: 16px;
                /*商品顶部图片和文案*/
                .list-row-item {
                    border: 1px solid #dddddd;
                    margin-left: 8px;
                    flex:0 0 350px;
                    margin-bottom: 16.66px;
                    .list-row-top{
                        position: relative;
                        .image{
                            width: 100%;
                            height: auto;
                        }
                        .title{
                            text-align: left;
                            color: black;
                            font-weight: bold;
                            font-size: 26px;
                            line-height: 40px;
                        }
                    }
                    /*商品底部价格和产品数量*/
                    .list-row-bottom{
                        padding: 0 4px 4px 4px;
                        font-weight: 500;
                        .row{
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: space-between;
                            align-items: center;
                            .origin-price{
                                text-decoration: line-through;
                            }
                        }
                        .count{
                            display: flex;
                            flex-flow: row nowrap;
                            justify-content: space-between;
                            align-items: center;
                        }
                    }
                }
            }
            .more-btn{
                background-color: #0e90d2;
                letter-spacing: 4px;
                line-height: 80px;
                text-align: center;
                margin-top: 20px;
                height: 80px;
                color: white;
                margin-bottom: 40px;
                width: 90%;
                margin-left: 5%;
                border-radius: 5px;
            }
        }
    }
</style>