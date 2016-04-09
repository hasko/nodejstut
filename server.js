const http = require("http");
const url = require("url");

function start(route, handle) {
    
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World!");
        response.end();
    }
    
    http.createServer(onRequest).listen(process.env.PORT);
    console.log("Server started on port " + process.env.PORT);

}

exports.start = start;