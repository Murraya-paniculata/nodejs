// require("/Users/\shengshaoxing/Desktop/nodejs-learn/1-3node的模块化细节/a.js") // 绝对路径
require("./a.js"); // 会转化为绝对路径

function require(modulePath) {
    // 1. 将modulePath转换为绝对路径
    // 2. 判断是否有缓存
    if(require.cache['/Users/shengshaoxing/Desktop/nodejs-learn/1-3node的模块化细节/myModule.js']){
        return require.cache['/Users/shengshaoxing/Desktop/nodejs-learn/1-3node的模块化细节/myModule.js']
    } else {
        // 4. 包裹到一个函数中
        function _temp(module, exports, require, __dirname, __filename) {
            console.log("当前模块路径：", __dirname);
            console.log("当前模块文件：", __filename);
            exports.c = 3;
            module.exports = {
                a: 1,
                b: 2
            };
            this.m = 5;
        }
        // 5. 创建module对象
        module.exports = {};
        const exports = module.exports;
        // 6. 调用
        __temp.call(module.exports, module, exports, require, module.id, module.filename);
        
    }
}

const myModule = require('./myModule');
console.log(1234, myModule); // 分析这里的结果
