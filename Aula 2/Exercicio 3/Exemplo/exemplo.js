//Este exemplo vai importar o modulo cubo, que esta na MESMA pasta
//Para importar modulos que estao na mesma pasta, utilizamos a seguinte sintaxe:
//
//var <nome da variavel> = require('./<nome do modulo>')
//
//No nosso caso, fica:

var cubo = require('./cubo')

//Imprimiremos alguns cubos

console.log('4 ao cubo:', cubo(4))
console.log('2 ao cubo:', cubo(2))