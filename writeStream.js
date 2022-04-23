var fs = require("fs");

var data = "菜鸟教程官网地址： www.runoob.com";

var writerStream = fs.createWriteStream("output.txt");

writerStream.write(data, "UTF8");

writerStream.end();
