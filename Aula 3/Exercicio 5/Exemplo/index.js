
//Primeiro deve-se importar o modulo crypto
var crypto = require('crypto')

//Entao, cria-se um hash; neste caso sha1(bizu)
var hash = crypto.createHash('sha1')

//Dai, atualiza-se o hash com a string que se quer
hash.update('teste')

//Entao digere-se o hash como hex
var resultado = hash.digest('hex')

//Imprimindo o resultado
console.log(resultado)
