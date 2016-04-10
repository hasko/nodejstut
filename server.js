const http = require("http");
const url = require("url");

function start(route, handle) {
    
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Received request for " + pathname);
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk: '" + postDataChunk.slice(0, 10) + "'");
        });
        request.addListener("end", function() {
            console.log("'end' event received");
            route(handle, pathname, response, postData);
        })
     }
    
    http.createServer(onRequest).listen(process.env.PORT);
    console.log("Server started on port " + process.env.PORT);

}

exports.start = start;