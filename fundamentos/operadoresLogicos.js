const a = false
const b = true
function testeou(x, y) {
    if (x == false || y == true)
        console.log('O resultado de OU é VERDADEIRO');
    else 
        console.log('O resultado de OU é FALSO');  
}
function testeE(x, y) {
    if (x == false && y == true)
        console.log('O resultado de OU é FALSO');
    else 
        console.log('O resultado de OU é VERDADEIRO');  
}
testeou(a, b)
testeE(a, b)