####　安装vue-router 参考官网
~~~~
cnpm install vue-router
~~~~
####　vm中的渲染关系
~~~~
    <router-link to="/account">account</router-link>
    <router-link to="/goodList">goodlist</router-link>
    <router-view></router-view>
    需要写到app.vue中，因为index.html中的#app内容会被app.vue中的内容替换。
    因此需要把上面的内容放到app.vue里面。

     APP 组件是通过 vm 实例的render函数渲染出来的，render函数渲染出来的组件只能放到el:'#app'
     所指定的元素中。
     account.vue和GoodList.vue组件，是通过路由匹配监听到的，所以这两个组件只能展示到属于
     路由的<router-view></router-view>中去。

    子组件的渲染只能在他属于的父组建中渲染
~~~~

#### 组件的样式
~~~~
1）scoped 样式只能在当前组建中使用。
2）如果不加scoped 默认是全局的样式
3) 普通标签只支持普通的样式，如果想要启用scss或者less需要为style元素试着lang属性
<style lang="less" scoped>
    body{
        div{
            
        }
    }
</style>
~~~~

#### 路由代码参考router.js
~~~~
这是抽离后的代码
~~~~

## mint-ui代码片段
~~~~
cnpm install babel-plugin-component -D

{
  "presets": [
    ["@babel/preset-env"]
  ],
  "plugins": [
    ["@babel/transform-runtime"],
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}
~~~~

## MUI 代码片段
~~~~
https://dev.dcloud.net.cn/mui/
mui是代码片段，与mint-ui有本质的区别，mui与bootstrap相同，
是提供了style和html的代码片段。
与小米ui无关系

mint-ui 是现成的组件库，只能和vue使用。
mui 使用与任何组件，不能使用npm下载，需要手动下载，并解压。
然后拷贝到项目中使用。
~~~~
