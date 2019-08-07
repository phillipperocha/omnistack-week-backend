// Existem várias maneiras de chamar o server aqui dentro mas faremos o seguinte
// Importaremos o express
const express = require('express');
// E usar o método do express específico pra rotas
const routes = express.Router();

// E agora atualizaremos o nosso routes no lugar do server
routes.get('/', (req, res) => {
    let nome = req.query.nome;
    let idade = req.query.idade;

    return res.json({"nome": nome, "idade": idade});
});

// E exportaremos as nossas rotas para que o server possa utilizá-las
module.exports = routes;