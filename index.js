const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
    res.send('Olá mundo')
  })
//lista de personagens
  const lista = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

  // Read all -> [GET] / item
  app.get('/item', function (req, res){
    //envio a lista inteiro como resposta HTTP
    res.send(lista)
  })

  // Read By ID -> [GET] /item/:id
  app.get('/item/:id', function(req, res){
    // Acessp o ID no parâ,etro de rota
    const id = req.params.id

    // Acesso item na lista baeado no ID recebido
    const item = lista[id]

    // Envio o item obtido como resposta HTTP
    res.send(item)
  })

app.listen(3000)