var http = require("http");
var url = require("url");
var route = require('./router');

function start (route) {
    function onRequest(request, response) {
        console.log(url.pathToFileURL(request.url).pathname)
        var pathname = url.pathToFileURL(request.url).pathname;

        route(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" })
        response.write("hello world");
        response.end();
    }
    http.createServer(onRequest).listen(8989);
    console.log("Server has start!");
}

start(route.route);