var fs = require('fs');
var path = require('path');


var fileName = path.join(__dirname,'./files/1.txt');
//promise 是为了解决多次嵌套的问题，代码量并不会减少，把嵌套代码改成串连调用的形式。
//Promise是构造函数。在Promise上有两个函数resolve和reject两个函数
//Promise 狗崽好事的Prototype属性上有一个then方法，
//promise是一个异步操作，当我们new一个Promose的实例，这个实例就表示一个具体的操作。
//promise是异步操作，那么这个异步操作的结果只有两种状态。
//1）状态1.异步执行成功，需要在内部调用成功的回调函数resolve把结果返回给回调者。
//2）状态2，异步执行失败，需要在内部调用失败的回调函数reject把返回结果给调用者。
//由于promise的实例，是一个异步操作，所以内部拿到操作的结果后，无法使用return把操作
//的结果返回给调用者，这时候，只能使用回调函数的形式，来吧成功或者失败的结果，返回给回调这。
//promise的回到函数，有then方法预先设定。
//new 出来的promise，只是形式上的一个异步操作。所谓形式上的异步操作，是指他具体的异步内容是什么，目前还不知道。
//var promise = new Promise();

//catch 如果前面有任何promise执行失败，则立即终止所有promise的执行，执行catch();中的方法。

function getFileByPath(fpath) {
    return  new Promise(function (resolve,reject) {
        fs.readFile(fpath,'utf-8',(err,dataStr)=>{
            if (err){
                reject(err);
            }else {
                resolve(dataStr);
            }
        });
    });
}

getFileByPath(path.join(__dirname,'./files/1.txt'))
.then(
    function (data) {
        console.log(data);
        return getFileByPath(path.join(__dirname,'./files/2.txt'))
    },function (err) {
        console.log(err)
    }
).then(
    function (data) {
        console.log(data)
        return getFileByPath(path.join(__dirname,'./files/3.txt'))
    },
    function (error) {

    }
).then(
    function (data) {
        console.log(data)
    },
    function (error) {

    }
)

