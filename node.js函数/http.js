var http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("hello world2");
//     res.end();
// }).listen(9999);

function onRequest(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("hello world2");
    res.end();
}

http.createServer(onRequest).listen(9898);