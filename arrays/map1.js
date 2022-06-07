const nums = [1, 2, 3, 4, 5]
console.log(nums)
// o map é um for com propósito

let resultado = nums.map(function (e) {
    // com essa função eu vou retornar o dobro dos elementos
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
//toFixed é casas decimais
//replace() é a substituição do ponto por vígula
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)