const http = require("http");
const fs = require('fs');


http.createServer(function(request, response) {
	console.log('req come' + request.url);
	
// 	const html = fs.readFileSync('index.html', 'utf-8');
// 	response.writeHead(200, {
// 		'Content-Type': 'text/html',// 页面解析html文档， text/plain 不解析html文档
// 	});
// 	response.end(html);


	if(request.url === '/') {
		const html = fs.readFileSync('index.html', 'utf8');
		response.writeHead(200, {
			'Content-Type': 'text/html',
		})
		response.end(html);
	}
	
	if(request.url === '/script.js') {
		response.writeHead(200, {
			'Content-Type': 'text/javascript',
			'Cache-Control': 'max-age=200, public',
		})
		response.end('console.log("script loaded two")');
	}
	
}).listen(8888);

console.log("listen on 8888!");