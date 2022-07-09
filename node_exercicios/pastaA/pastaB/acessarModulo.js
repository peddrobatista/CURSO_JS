const moduloA = require('../../moduloA')


const http = require('http') // Usando o core do node
http.createServer((req, res) => {
    res.write('Bom dia') // Resposta a requisição
    res.end() // Finalizando a resposta da requisição
}).listen(8080)