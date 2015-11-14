var testador = /bytes=([0-9]+)-([0-9]+)/
var testador2 = /bytes=([0-9+])-/

var string = 'bytes=123-456'

console.log(testador.test(string))
console.log(testador2.test(string))

var resultado = testador.exec(string)
console.log(resultado)
console.log(resultado[1], resultado[2])
