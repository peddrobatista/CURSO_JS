const escola = 'Cod3r';
console.log(escola.charAt(4)); //retorna a letra da string da posição 4
console.log(escola.charAt(5)); //retorna o valor vazio pois a string não vai até 5
console.log(escola.charCodeAt(3)); //retorna o valor da tabela unicode
console.log(escola.indexOf('3')); // retorna o indice associado ao valor dentro da string
console.log(escola.substring(1)); // retorna a contagem a partir do indice 1
console.log(escola.substring(0, 3)); // retorna a contagem de 0 a 2 excluindo do 3 em diante
/* Função concatenar */
console.log('Escola '.concat(escola).concat(' ! '));
/* Função de troca de valores */
console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\w/g, 'e')); // retorna a substuição dos valores dos indices pela 'e'
console.log('Ana,Maria,Pedro'.split(',')); // retorna os valores num array