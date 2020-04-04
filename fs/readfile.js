const fs = require('fs');

// 异步读文件
fs.readFile('data.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(1)
        console.log(data);
    }
});
// 读取图片文件
fs.readFile('sample.png', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);  // 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。
        console.log(data.length + ' bytes');
        // 在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。
        // Buffer对象可以和String作转换
        // var text = data.toString('utf-8');
        // console.log(text);
        // var buf = Buffer.from(text, 'utf-8');
        // console.log(buf);
    }
});

// 同步读文件
// 同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。
try {
    var data = fs.readFileSync('data.txt', 'utf-8');
    console.log(2)
    console.log(data);
} catch (err) {
    console.log(err) // 出错了
}
