var http = require('http')

var server = http.createServer(function(req, res) {
	res.writeHead(404)
	res.end('File not found')
})

server.listen(8000)