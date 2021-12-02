//visibilidade da variável no escopo
function teste(){
    var local = 123
    console.log(local)
}
teste() // Essa sintaxe vai funcionar 
console.log(local) //essa sintaxe não vai funcionar
