const express = require('express');
const mongoose = require('mongoose')
// Importar o CORS
const cors = require('cors');

const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://phillipperocha:senha@cluster0-pzitq.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

// Aqui vamos utilizar o CORS
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);