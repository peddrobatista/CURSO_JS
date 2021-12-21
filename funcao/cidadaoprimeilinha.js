//criar de forma literal

function fun1() {}

//armazenar em uma variável
const fun2 = function () {}

//Armazenar em um arrey

const array = [function (a, b) {return a + b}, fun1, fun2]

//Armazenar em atributo objeto

const obj = {}
obj.falar = function () { return 'Opa!!'}
console.log(obj.falar())

//Passar função como parâmetro
function run(fun) {
    fun()
}
run (function () {console.log('Executando....')})

//Uma função pode retornar ou conter outra função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}