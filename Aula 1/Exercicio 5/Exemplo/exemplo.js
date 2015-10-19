//Importaremos o modulo http
var http = require('http')

//Criamos o servidor
var server = http.createServer(function(req, res) {
	//Passamos o status 200(que eh o status OK) para o cliente
	res.writeHead(200)
	//Escrevemos uma pagina da internet
	res.end('<html><head></head><body><b style="color: #505050">It works!</b></body></html>')
})

//Abrimos o servidor
server.listen(8000)
