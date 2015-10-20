var http = require('http')

var server = http.createServer(function(req, res) {
	if(req.method === 'POST') {
		res.writeHead(200)
		res.end('Welcome!')
	}
	else {
		res.writeHead(404)
		res.end('File not found!')
	}
})

server.listen(8000, function() {
	console.log('Servidor funcionando na porta 8000')
})