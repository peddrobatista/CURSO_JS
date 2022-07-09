const porta = 3003
const express = require('express') /* Importando da pasta express */
const app = express()/* Em cima dessa variável app vamos colocar nossos serviços */
const bodyParser = require('body-parser')
const bancodeDados = require('./bancodeDados') // Chamando o arquivo bancodeDados.js 

app.use(bodyParser.urlencoded({ extended: true})) // Vai ser chamado por qualquer requisição

app.get('/produtos', (req, res, next) => {
    /* A função send envia uma resposta */
    //res.send({nome: 'Notebook', preco: 123.45}) Esse objeto vai ser convertido para JSON automaticamente
    res.send(bancodeDados.getProdutos())
})/* Get é uma forma de requsição */

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancodeDados.getProduto(req.params.id))
})
// Criando e salvando os dados requeridos
app.post('/produtos', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Essa resposta vai ser retornada pelo método send(), transformando-o em JSON
})
// Atualizando os dados requeridos
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancodeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Essa resposta vai ser retornada pelo método send(), transformando-o em JSON
})
// Excluindo os dados requeridos
app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancodeDados.excluirProduto(req.params.id)
    res.send(produto) // Essa resposta vai ser retornada pelo método send(), transformando-o em JSON
})
app.listen(porta, () => {
    console.log(`Servidor está executando na porta... ${porta}.`)
})// A porta que vai ser escutada e uma callback de teste pra saber se está tudo ok