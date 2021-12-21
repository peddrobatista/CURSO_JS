const pessoa = {
    saudacao: 'Bom dia!!!',
    falar() {
        //this referencia o saudacao de pessoa, sem ele saudacao não seria reconhecido
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()