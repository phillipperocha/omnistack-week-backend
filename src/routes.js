const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;

    return res.json({"nome": nome, "idade": idade});
});

routes.post('/devs', (req, res) => {
    // Agora sabemos ler o req.body e o devolveremos também como resposta
    return res.json(req.body);
})

module.exports = routes;