console.log(__filename);
console.log(__dirname);

function printHello () {
    console.log("Hello world")
}

var t = setTimeout(printHello, 1000);



console.time("获取数据")
clearTimeout(t)
console.timeEnd("获取数据完成")

console.log(global);

console.log(process);

// process.on("exit", (code) => {
//     console.log("程序退出啦", code);
// })

process.stdout.write("hello world " + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
 });
 
 // 获取执行路径
 console.log(process.execPath);
 
