const express = require('express');
const server = express();

server.get('/', (req, res) => {
    // Podemos pegar os parâmetros da requisição através da mesma pela query
    let nome = req.query.nome;
    let idade = req.query.idade;

    // Como iremos trabalhar com API retornaremos JSON por isso
    return res.json({"nome": nome, "idade": idade});
});

server.listen(3333);