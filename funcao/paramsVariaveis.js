function soma() {
    let soma = 0
    //passagem de parãmetro variável, isto é, o arguments vai receber qualquer passagem de soma
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
