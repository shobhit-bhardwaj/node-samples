/*
 * http.Server(Class) <--- net.Server(Class) <--- EventEmitter
 */

const http = require('http');

const server = http.createServer((request, response) => {
	if(request.url === '/') {
		response.write('Hello From HTTP');
		response.end();
	} else if(request.url === '/api/users') {
		response.write(JSON.stringify(['Shobhit', 'Ravi', 'Rajesh']));
		response.end();
	}
});

var port = 3000;

server.on('connection', (socket) => {
	console.log('New Connection');
});
server.listen(port);

console.log('Server is Listening on Port - ', port);