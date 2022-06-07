//Notação literal dos objetos criados, aqui há 5 tipos de objetos criados

const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2)

const a1 = 'nota'
const val = 7.9
const obj3 = {}
obj3[a1] = val
console.log(obj3)

const obj4 = {[a1]: val}
console.log(obj4)

obj5 = {
    funcao1: function() {

    },
    funcao2() {

    }
}
console.log(obj5)