const express = require('express');
const routes = require('./routes')

const server = express();

// Vamos avisar ao Express que nas requisições as informações estarão em JSON
server.use(express.json());

server.use(routes);

server.listen(3333);