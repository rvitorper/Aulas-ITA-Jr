//importamos o modulo http
var http = require('http')

//Criamos o servidor
var server = http.createServer(function(req, res) {
	//A propriedade 'method' de req eh quem define o tipo de requisicao
	//Se for GET
	if(req.method === 'GET') {
		res.end('Foi feita uma req do tipo GET')
	}
	//Se for POST
	else if(req.method === 'POST') {
		res.end('Foi feita uma req do tipo POST')
	}
	//Se nao for nem GET, nem POST(sim, eh possivel)
	else {
		res.end('Foi feita uma req de um tipo que nem é GET nem POST')
	}
})

//Inicia o servidor
//Quando uma funcao eh passada como segundo parametro,
//ela eh executada assim que o servidor inicia
server.listen(8000, function() {
	console.log('Servidor funcionando na porta 8000')
})