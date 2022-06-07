console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

// Notação recomendada
aprovados = ['Bia', 'Carlos', 'Ana']
// acesso dos elementos do array
console.log(aprovados[0])
console.log(aprovados[3]) // Vai retornar indefinido


// Adicionando um novo elemento no array
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length) 
console.log(aprovados[8] === undefined)
console.log(aprovados)