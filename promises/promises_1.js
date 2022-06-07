// p se torma objeto que pode receber dados da promises através de uma função que vai passar outra função como parâmetro



let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(3);
})
/*  para executar o objeto p se usa o then passando uma função com parâmetro de valor que vai receber o valor do parâmetro
    da função de promise
*/
p.then(function (valor) {
    //nesse caso o valor de valor vai ser 3
    console.log(valor);
})