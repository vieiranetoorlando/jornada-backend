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

  // Sinalizamos que o corpo da requisição está em JSON
  app.use(express.json())

  //create ->[POST] /item
  app.post('/item', function (req, res) {
    // Extrainmos o corpo da requisição
    const body = req.body

    //Pegamos o nome (string) que foi enviado dentro do corpo
    const item = body.nome

    // Colocamos o nome dentro da lista de itens
    lista.push(item)

    // Enviamos uma rseposta de sucesso
    res.send('Item adicionado com sucesso!')
  })

app.listen(3000)