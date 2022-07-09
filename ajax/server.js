// Implementando o server.js
const bodyParser = require('body-parser') // importando body-parser e o express
const express = require('express')
const app = express()
//trantando as requisições que chegarem no servidor
app.use(express.static('.')) // provendo todos arquivos estáticos(index.html, style.css) dentro da pasta ajax
app.use(bodyParser.urlencoded({extended: true})) // transforma os dados em objetos
app.use(bodyParser.json()) //transforma json em objeto
// Fazendo upload de arquivos
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    }, // reescrevendo o nome dos arquivos 
    filename: function (req, file, callback) { 
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({storage}).single('arquivo')
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro!')
        }
        res.end('Concluído com sucesso')
    })
})
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})
app.listen(8080, () => console.log('Executando...'))