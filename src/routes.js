const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/', (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;

    return res.json({"nome": nome, "idade": idade});
});

// E agora aqui no Post de devs, chamaremos o controller com o método store
routes.post('/devs', DevController.store);

module.exports = routes;