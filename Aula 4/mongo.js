var http = require('http');

var server = http.createServer(function (request, response) {

  response.writeHead(202, { 'Content-Type': 'application/json' });
  var data = { message: 'not implemented', nome: 'lucas', vistos: ['filme1', 'filme2']};
  response.end(JSON.stringify());
});

server.listen(8000);
