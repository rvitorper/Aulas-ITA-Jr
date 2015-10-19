//Neste arquivo, encontra-se um exemplo de como exportar um modulo
//Exportaremos uma funcao que recebe um numero e retorna seu cubo

//A funcao a ser exportada eh a seguinte:
function cubo(x) {
	return x*x*x;
}

//Para exportar faz-se da seguinte maneira:
//
//module.exports = <objeto a ser exportado>
//
//Com isso pode-se exportar a funcao como abaixo:
//Sem os parenteses, ok?
module.exports = cubo