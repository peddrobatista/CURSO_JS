// MÉTODOS IMPORTANTES
const pilotos = ['Vettel', 'Alonso', 'Raikknen', 'Massa']
pilotos.pop() // Massa quebrou o carro!!, esse método remove o último elemento do arrray
console.log(pilotos)

pilotos.push('Vestappen') // esse método adiciona um novo elemento no array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona o primeiro elemento no array
console.log(pilotos)

// splice pode adicionar ou remover elementos no array

pilotos.splice(2, 0, 'Bottas', 'Massa') // Adicionando...
console.log(pilotos)

pilotos.splice(3, 1) // Removendo o Massa do array
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Novo array a partir do índice 1 até o 3
console.log(algunsPilotos2)