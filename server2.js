const http = require("http");

http.createServer(function(req, res) {
	console.log("req come" + req.url);
	
	res.writeHead(200, {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'X-Test-Cors', 
		'Access-Control-Allow-methods': 'POST,PUT,DELETE',
		'Access-Control-Allow-Max-Age': '1000',
		// 'Access-Control-Allow-Origin': 'http://baidu.com',
		// 'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
	})
	
	res.end("456");
}).listen("8887");

console.log("server run 8887!");