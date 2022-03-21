console.log(global); // 全局对象
console.log(global === global.global);

const timer = setTimeout(() => {
    console.log(1)
}, 1000)

console.log(timer); // 和浏览器不同的是返回的是一个对象而不是数字
console.log(__dirname);
console.log(__filename);

// Buffer 类型化数组  继承于Uint8Array  计算机中存储的是字节
const buffer = Buffer.from("abcdefg", 'utf-8');
console.log(buffer);

// process
console.log('当前的命令行', process.cwd()); // 当前命令行的位置

// let i = 0

// const timers = setInterval(() => {
//     i++;
//     console.log(i)
// }, 1000)

// process.exit(0); // 退出程序，参数0代表没有错误，1为有错误

console.log(process.argv); // 获取命令行的中参数
console.log(process.platform); // 获取操作系统平台信息

// process.kill(385); // 杀死某个进程

console.log(process.env);