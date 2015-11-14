var fs = require('fs')

var arquivo = 'arquivo.txt'

var arquivoSincrono = fs.readFileSync(arquivo)
console.log(arquivoSincrono.toString())

var arquivoAssincrono = fs.readFile(arquivo, function(err, data) {
    console.log(data.toString())
})

var arquivoPipe = fs.createReadStream(arquivo)
arquivoPipe.pipe(process.stdout)
