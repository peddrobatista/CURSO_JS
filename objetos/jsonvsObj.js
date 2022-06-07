// Criando um objeto 
const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c}}
// Convertendo objeto para JSON
console.log(JSON.stringify(obj))

// Convertendo JSON para objeto
console.log(JSON.parse('{"a": 1, "b": 2, "c": 2}')) // Esse formato é válido
console.log(JSON.parse('{"a": 1, "b": "String", "c": true, "d": {}, "e": []}'))