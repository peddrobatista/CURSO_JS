const obj1 = {}
obj1.nome = 'Bola';
console.log(obj1.nome);

function obj(nome) {
    this.nome =  nome;
}

const obj2 = new obj('Cadeira');
const obj3 = new obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
