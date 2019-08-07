// Vamos importar o axios dentro do nosso controller
const axios = require('axios')

// Nosso controller aqui pode ser simplesmente um objeto, então podemos exportar
module.exports = {
    // E aqui agora colocamos todas as nossas funções, os métodos do controller
    // Para criar utilizaremos o método store
    async store(req, res) {
        // Iremos pegar o username do github de nosso usuário primeiro
        const { username } = req.body

        // Queremos agora acessar a API do github: api.github.com/users/phillipperocha
        // e retornar os dados para que possamos utilizar.
        // Vamos utilizar o axios para fazer requisições em APIs externas
        // Mas o axios demora um pouquinho pra pegar os dados e precisamos mandar ele esperar antes de seguir
        // Por isso usamos o async na função
        const response = await axios.get(`https://api.github.com/users/${username}`);
        // O axios quando faz uma requisição ele retorna os dados dentro do data
        return res.json(response.data);
    }
};