// Desafio 1, todos os alunos são bolsistas?
// Desafio 2, Algum aluno é bolsista?
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]
// D1
const todosBolsistas = (resultado, bolsista) => resultado && bolsista // E
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// D2
const algumBolsista = (resultado, bolsista) => resultado || bolsista // OU
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))