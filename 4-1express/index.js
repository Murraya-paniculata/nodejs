const express = require('express');

const http = require('http');

const app = express(); // 创建一个express应用 实际上是一个函数，用于处理请求的函数

// const server = http.createServer(app);

app.get('/abc/:id', (req, res) => {
  console.log(req.headers);
  console.log(req.path);
  console.log(req.query);
  console.log(req.params);
  res.send("123455");
})

app.listen(9527, () => {
  console.log("server listen on 9527");
})


