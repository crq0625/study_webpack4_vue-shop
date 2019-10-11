const path = require('path');
//通过Node中的模块操作，向外暴露了一个配置文件。
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin   = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.js',//入口文件，表示要使用webpack打包的文件
    output: {
        path: path.resolve(__dirname, 'dist'),//输出文件目录
        filename: 'webpack.bundle.js'//输出文件名字
    },
    module:{//第三方模块加载器
        rules:[//所有第三方模块的匹配规则
            {
                test: /\.css$/,//处理的文件
                use:[
                    {loader:'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8 //小数点微说
                        }
                    }
                ]
            },//处理css文件的loader配置
            {
                test: /\.less$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8
                        }
                    },
                    {loader: "less-loader"}
                ]
            },//处理less文件的loader配置
            {
                test: /\.scss$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            },//处理less文件的loader配置
            {
                test :/\.(jpg|png|gif|bmp|jpeg)/,
                use:[
                    {
                        loader: "url-loader",
                        options: {
                            limit: '40000',// 表示小于50kb的图片转为base64,大于40kb的是路径
                            name: '[name]_[hash].[ext]?[hash]',
                            //outputPath:'images' //定义输出的图片文件夹
                        }
                    }
                    ]
            },//图片URL处理
            {
                test:/\.(ttf|eot|woff|woff2|svg)$/i,
                use:[
                    {
                        loader: "url-loader",
                    }
                ]
            },//字体URL处理
            {
                test: /iview\.src\.*?js$/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,//不处理的目录
                use: {
                    loader: 'babel-loader',
                }
            },//babel 语法转换规则处理
            {
                test: /\.vue$/,
                use: [{loader: "vue-loader"}]
            }
        ]
    },
    plugins: [//配置插件
        new htmlWebpackPlugin({//创建一个内存中生成html页面的插件
            template: path.join(__dirname,'./src/index.html'),//模板界面
            filename: "index.html"//内存中页面的名称
        }),
        // 请确保引入这个插件！vue-loader 使用。
        new VueLoaderPlugin()
    ]
};