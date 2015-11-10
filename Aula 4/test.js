var http = require('http');

var mongoskin = require('mongoskin');

var db = mongoskin.db('mongodb://localhost:27017/aulas');

var server = http.createServer(function (request, response) {


	db.collection('alunos').find({nome: 'lucas'}).toArray(function(err, result) {
		if (err) {
			console.log(err)
            console.log('oioi');
        }
		else {
			console.log(result);

			response.writeHead(202, { 'Content-Type': 'application/json' });
			
			response.end(JSON.stringify(result));
		}
	});
});

server.listen(8000);
