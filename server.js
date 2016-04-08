const http = require("http");

http.createServer(function(request, response) {
    console.log("Request received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World!");
    response.end();
    console.log("Response finished");
}).listen(process.env.PORT);
