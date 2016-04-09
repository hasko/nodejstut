const server = require("./server");
const router = require("./router");
const reqhdl = require("./requestHandlers");

var handle = {};
handle["/"] = reqhdl.start;
handle["/start"] = reqhdl.start;
handle["/upload"] = reqhdl.upload;

server.start(router.route, handle);
