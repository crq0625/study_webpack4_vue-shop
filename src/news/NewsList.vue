<template>
    <div class="page">
        <div class="item" v-for="(item,index) in newsList" :key="item.id" >
            <div class="item-head" @click="clickCategoryAction(index,item)">
                <div class="item-head-title" v-text="item.name"></div>
                <img class="item-head-img" src="../assets/Arrow.png">
            </div>
            <div
            v-show="item.selectedflag"
            class="item-body" 
            v-for="(articleinfo,subIndex) in item.articleinfo" 
            v-bind:key="articleinfo.id" 
            @click="clickArticleAction(subIndex,articleinfo)">
                <div class="item-body-title" v-text="articleinfo.title" ></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                newsList:[]
            };
        },
        created(){
            //创建组件时候调用
            this.getNewsList();
        },
        methods:{
            getNewsList(){
                this.$http.get('api.php/home/index/newslist.html').then(result=>{
                    if(result.body.flag == 1){
                        //数据保存到data上
                        this.newsList = result.body.data.category_info;
                    }else{
                         console.log(result.body.msg);
                    }
                });
            },
            /**
             * 点击分类
             */
            clickCategoryAction(index,category){
                if(category.selectedflag == undefined){
                    category.selectedflag = true;
                }else if(category.selectedflag == true){
                    category.selectedflag = false;
                }else{
                    category.selectedflag = true;
                }
                this.$set(this.newsList,index,category);
                console.log(this.newsList[index]);
                // console.log(this.newsList[index].selected);
                // console.log(index);
                // console.log(category.id);
            },
            /**
             * 点击标题
             */
            clickArticleAction(index,articleInfo){
                console.log(index);
                console.log(articleInfo.title);
            }
        }
    }
</script>
<style lang='less' scoped>
*{
    box-sizing: border-box;
}
.page{
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 100px 0px;
    .item{
        .item-head{
            height: 100px;
            color: #0e90d2;
            padding: 10px 0;
            box-sizing: border-box;
            background-color: white;
            border: 1px solid #dedede;
            font-size: 32px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            .item-head-title{
                flex: 1 1 0;
                margin-left: 20px;
                height: 80px;;
                line-height: 80px;
            }
            .item-head-img{
                flex: 0 0 30px;
                margin-right: 20px;
                width: 30px;
                height: auto;
            }
            
        }
        .item-head:hover{
            background-color: #bfecff;
        }
        .item-body{
            padding: 20px 0;
            box-sizing: border-box;
            background-color: white;
            border: 1px solid #dedede;
            .item-body-title{
                line-height: 48px;
                padding: 0 40px;
                color: black;
                font-size: 32px;
                text-align: left;
            }
        }
        .item-body:first-child,
        .item-body:last-child{
            border-top: none;
        }
        
    }
}
</style>