const sequencia = {
    _valor: 1, //convenção
    get valor() {return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
//a pseudovariavel valor vai se tornar a _valor
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // o algoritmo ignorou o 900 pois é menor que mil kkk