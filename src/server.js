const express = require('express');
// Importando o mongoose antes do routes
const mongoose = require('mongoose')
const routes = require('./routes')

const server = express();

// E conectaremos ao banco de dados Mongo utilizando a URL de conexão
// Que pegamos lá no Cluster trocando o USERNAME E O PASSWORD
// Também mudaremos o nome do nosso banco, que por padrão vem test para omnistack
mongoose.connect('mongodb+srv://phillipperocha:senha@cluster0-pzitq.mongodb.net/omnistack?retryWrites=true&w=majority', {
    // Precisamos avisar para o mongoose que estamos usando o novo formato de URL
    useNewUrlParser: true
})

server.use(express.json());

server.use(routes);

server.listen(3333);