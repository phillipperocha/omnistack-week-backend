const express = require('express');
// Sempre que quisermos no node importar um recurso que criamos, que não é um module
// Temos que passar o caminho do arquivo
const routes = require('./routes')

const server = express();

// E agora vamos dizer ao nosso servidor para usar essas rotas
server.use(routes);

server.listen(3333);