// 管道流
var fs = require("fs");

var readerStream = fs.createReadStream("input.txt");

var writerStream = fs.createWriteStream("out.txt");

readerStream.pipe(writerStream);

// 链式流
var zlib = require("zlib");
fs.createReadStream("./input.txt").pipe(zlib.createGzip()).pipe(fs.createWriteStream("input.txt.gz"));
