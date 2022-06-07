// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa) // selando o objeto
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva' // Não posso modificar pois está selado
delete pessoa.nome // Não posso deletar pois está selado
pessoa.idade = 29 // Posso alterar
console.log(pessoa)

// Object.freeze = selado + valores constantes
