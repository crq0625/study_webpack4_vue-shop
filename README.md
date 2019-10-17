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
    position:relative;
}
~~~

## vue中数组的更新需要使用特别方法。


## 创建公用评论组件。
1 创建组件
2 引入组件
3 父组件中使用components 属性，注册组件
4 标签中使用组件名称，引入

## 子组件被挂载的时候，会加载自己的声明周期。

## 禁用webpack 打包时候的严格模式。
 cnpm install babel-plugin-transform-remove-strict-mode
 .babelrc
 {
     "plugins":['transform-remove-strict-mode']
 }

 ## Vant 轻量、可靠的移动端 Vue 组件库 https://youzan.github.io/vant/#/zh-CN/quickstart
 ## http://vue.ydui.org/docs/#/tab

 ## 全局使用导入组件
    使用vue.components();注册。
 ## 局部使用组件
   在components属性上注册

## 解决visual studio 卡顿问题
search.followSymlinks ：false