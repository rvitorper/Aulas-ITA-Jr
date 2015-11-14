var fs = require('fs')

//Le um arquivo de maneira síncrona
var arquivoSincrono = fs.readFileSync('arquivoExemplo.txt')
console.log(arquivoSincrono.toString())

//Le um arquivo de maneira assincrona
var arquivoAssincrono = fs.readFile('arquivoExemplo.txt', function(err, data) {
    console.log(data.toString())
})

//Le um arquivo com pipe
var arquivoPipe = fs.createReadStream('arquivoExemplo.txt')
arquivoPipe.pipe(process.stdout)
