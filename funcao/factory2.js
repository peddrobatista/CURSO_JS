function  criarProduto(nome, preco) {
    return {
        nome,
        preco,
        descontro: 0.1
    }
}

console.log(criarProduto('Notebook', 2149.49))
console.log(criarProduto('Ipad', 1199.49))