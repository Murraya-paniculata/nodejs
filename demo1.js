var fs = require("fs");

// var data = fs.readFile("./input.txt");

// console.log(data.toString());
// console.log("程序执行结束")

var data1 = fs.readFile("./input.txt", (err, data) => {
    console.log(data.toString());
})
console.log("程序执行结束")
