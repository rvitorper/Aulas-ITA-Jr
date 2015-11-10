var http = require('http');
var mongoskin = require('mongoskin');

var db = mongoskin.db('mongodb://localhost:27017/aulas');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'application/json'});

	db.collection('itabits').find({nome: 'lucas'}).toArray(function (err, result){
		res.end(JSON.stringify(result));
	});


	
});

server.listen(8000);