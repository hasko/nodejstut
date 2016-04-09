const http = require("http");
const url = require("url");

function start(route, handle) {
    
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response);
    }
    
    http.createServer(onRequest).listen(process.env.PORT);
    console.log("Server started on port " + process.env.PORT);

}

exports.start = start;