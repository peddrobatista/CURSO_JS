console.log("olá mundo!!")  // comentário de código
console.log('Convertendo data do formato americano para o formato brasileiro')
let dataEua = "2021-11-06";
let DataBr = dataEua.split('-').reverse().join('/');
console.log(dataEua);
console.log(DataBr); //  06/11/2021
// ou
let data = '2021-06-11';
data = new Date(data);
console.log(data);
console.log(data.toLocaleDateString()); //  06/11/2021
