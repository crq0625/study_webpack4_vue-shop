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

#### 编程跳转
~~~~
this.route 是路由参数对象,可以获取URL参数，params参数。
this.$router 是路由导航对象，可以实现前进，后退，跳转到URL
~~~~

##### 在进入离开的的过度中，会有6个class切换。

~~~~
举例：
0-1的过度
动画进入过度开始 v-enter
动画进入过度进行 v-enter-active
动画进入过度结束 v-enter-to

1-0的过度
离开过度的开始状态 v-leave
v-leave-active 离开进行
离开过渡的结束状态 v-leave-to

js 钩子函数：
  v-on:before-enter="beforeEnter"
  v-on:enter="enter"
  v-on:after-enter="afterEnter"
  v-on:enter-cancelled="enterCancelled"

  v-on:before-leave="beforeLeave"
  v-on:leave="leave"
  v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled"
~~~~

#####　view 中移动动画，需要给出动态的值，不能写死，因为屏幕分辨率会变化。
~~~~
根本就是坐标之间的变化。
    rectObject = object.getBoundingClientRect();

    rectObject.top：元素上边到视窗上边的距离;
    rectObject.right：元素右边到视窗左边的距离;
    rectObject.bottom：元素下边到视窗上边的距离;
    rectObject.left：元素左边到视窗左边的距离;
    rectObject.width：元素的宽度;
    rectObject.height：元素的高度;

~~~~

##### 父组件向子组件传值，使用属相绑定的方式传值。
##### 子组件向父组件传值，使用事件绑定的方式，调用父组件的方法，回掉得到值。
~~~~
bug:异步获取的数值，传递给子组件，如果子组件初始化完成，异步数据还没有获取到，此时子组件的值为undefined。
解决方法：
在子组件中使用watch监听父组件传递过来的值。
watch:{
    'max':function(newVal,oldVal){
    
    }
}
~~~~
#### vuex
~~~~
vuex 是为vue 配套的公共数据管理工具，它可以把一些共享的数据，保存到vuex中，方便整个程序的任何组件直接获取活或修改公共数据。
A组件，B组件，C组件 3个组件之间没有层级关系，现在C组件向使用A组件的值？
A是B的父组件，B是C的子组件，此时A与C传值？

vuex是为了保存组件之间共享数据内诞生的，如果组件之间有要共享的数据，可以直接挂载到vuex中，而不必通过父子组件之间传值。
如果组件数据不需要共享，此时，这些不要共享的私有数据，没有必要放到vuex中。

props 存放父组件传过来的数据。
data 自己的私有数据。
vuex 组件之间的共享数据，相当于一个数据仓库
~~~~