
//Definindo uma funcao normalmente
function quadrado(x) {
    return x*x
}

//Definindo uma funcao de outra maneira
var cubo = function(x) {
    return x*x*x
}

//Basta exportar um JSON no module.exports:
module.exports = {
    //definindo uma funcao inline
    dobro: function(x) {
        return 2*x
    },
    //procurando funcoes no corpo do modulo
    quadrado: quadrado,
    cubo: cubo
}
