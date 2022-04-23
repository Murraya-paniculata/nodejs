var fs = require("fs");
var data = "";

var readerStream = fs.createReadStream("./input.txt");

readerStream.setEncoding("UTF8");

readerStream.on("data", (chunk) => {
    data += chunk;
})

readerStream.on("end", (chunk) => {
    console.log(data);
})

readerStream.on("error", () => {
    console.log(err.stack);
})

