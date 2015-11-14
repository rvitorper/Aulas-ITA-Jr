var express = require('express')
var fs = require('fs') //bizurar o video com o pipe

//Cria o nosso app
var app = express()

//Esta rota apenas
app.use('/', express.static('public_html'))


//Esta rota cuida de distribuir o video
app.get('/video', function(req, res){

    //Aqui define-se o path do video
    var pathDoVideo = 'content/Boyhood.mp4'

    //Testador1: testa se possui dois numeros
    //Testador2: testa se possui apenas 1 numero
    var testador1 = /bytes=([0-9]+)-([0-9]+)/
    var testador2 = /bytes=([0-9]+)-/

    //A string a ser testada
    var toExtract = req.get('Range')

    //Se esta no formato do testador1
    if(testador1.test(toExtract)) {
        //Executa a regex
        var resultado = testador1.exec(toExtract)
        //Obtem-se o valor do inicio e do fim
        var inicio = Number(resultado[1])
        var fim = Number(resultado[2])
        //Le-se o arquivo desde 'inicio' ate 'fim'
        var arquivo = fs.createReadStream(pathDoVideo, {start: inicio, end: fim})
    }
    //Se esta no formato do testador2
    else if(testador2.test(toExtract)) {
        //Executa a regex
        var resultado = testador2.exec(toExtract)
        //Obtem-se o valor do inicio e faz-se o fim ser vazio
        var inicio = Number(resultado[1])
        var fim = ''
        //Le o arquivo desde 'inicio' ate o fim do arquivo
        var arquivo = fs.createReadStream(pathDoVideo, {start: inicio})
    }
    //Se nao esta em formato nenhum
    else {
        res.send('Erro!')
    }

    //Pega os parametros do arquivo(tamanho, quando foi criado, ...)
    var stats = fs.statSync(pathDoVideo)

    //Envia os headers Content-Range e Content-Type para bizurar o video
    res.header('Content-Range', 'bytes ' + inicio + '-' + fim +'/' + stats['size'])
    res.header('Content-Type', 'video/mp4')

    //Envia o status 206
    res.status(206)

    //Faz o pipe
    arquivo.pipe(res)
})

//Abre o servidor
app.listen(8000, function() {
    console.log('working on port 8000')
})
