##　git 管理代码
1. git add .
2. git commit -m "提交信息"
3. git push


## 制作首页
顶部是header
中间是内容变化层
底部是tabbar

用router-link 代替a标签。
用router-view 来展示路由匹配到的组件。
设置路由高亮，点击路由后可以设置，class属性。

## 页面适配
cnpm install lib-flexible -S

## px转换rem
~~~
cnpm install px2rem-loader --save-dev

App.vue 组件入口。
lib 第三方库文件夹。
index.html。html模板文件。
main.js   js文件。
router.js 路由入口文件。
~~~

## moment.js 日志格式化插件

## 组件界面css初始化
~~~
.page{
    width:100vw;
    height:100vh;
    overflow:hidden;
    position:relative;
}
~~~
