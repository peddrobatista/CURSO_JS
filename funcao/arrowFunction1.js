let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a

//Todas acima são a mesma coisa
//Todas abaixo são a mesma coisa

let ola = function  () {
    return 'Olá!!!'
}

ola = () => 'Olá!'
ola = _ => 'Olá!!'
console.log(ola())
