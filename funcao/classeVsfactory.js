class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
// Objeto criado a partir da classe acima
const p1 = new Pessoa('João')
p1.falar()


// Criando uma função factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
// Objeto criado a partir da função acima
const p2 = criarPessoa('João')
p2.falar()