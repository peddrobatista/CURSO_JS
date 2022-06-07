class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        // o super chama o construtor da superclasse que nesse caso seria Avo
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        // Super chama o construtor de Pai (sobrenome)
        super('Silva')
    }
}
const filho = new Filho
console.log(filho)