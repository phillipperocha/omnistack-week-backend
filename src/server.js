// Importaremos o expressJS com o require()
const express = require('express');

// O express é uma função, que quando chamada cria um servidor
const server = express();

// Precisamos mapear uma rota e dizer o que fazer com a requisição e a resposta
// Podiamos fazer GET, POST, PUT ou DELETE, mas vamos usar o get
server.get('/', (req, res) => {
    // Vamos retornar na response apenas um Hello World!
    return res.send('Hello World!');
});

// Precisamos setar em que porta esse servidor vai ouvir, no caso 3333
server.listen(3333);