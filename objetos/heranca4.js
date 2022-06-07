function MeuOjeto() {}
console.log(MeuOjeto.prototype)

const obj1 = new MeuOjeto
const obj2 = new MeuOjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuOjeto.prototype === obj1.__proto__)

MeuOjeto.prototype.nome = 'Anônimo' // Posso atribuir variável e valor 
// Posso atribuir métodos também
MeuOjeto.prototype.falar = function() {
    console.log(`Bom dia meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuOjeto.prototype
obj3.nome = "água"
obj3.falar()

// Resumindo a loucura....
console.log((new MeuOjeto).__proto__ === MeuOjeto.prototype) // Esse é verdadeiro
console.log(MeuOjeto.__proto__ === Function.prototype) // Esse é verdadeiro
console.log(Function.prototype.__proto__ === Object.prototype) // Esse é verdadeiro
console.log(Object.prototype.__proto__) // Esse é nulo