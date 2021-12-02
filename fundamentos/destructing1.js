const pessoa = {
    nome: 'Ana',
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}
const { nome} = pessoa
console.log(nome)
const { endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)