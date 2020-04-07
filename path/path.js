var path = require('path');
var workDir = path.resolve('.');
// console.log(workDir)
// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
console.log(filePath)
// var root = path.resolve(process.argv[2] || '.');
// console.log(process.argv)
// console.log('Static root dir: ' + root);