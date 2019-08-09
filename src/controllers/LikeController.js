// Importar o módulo de Dev
const Dev = require('../models/Dev')

module.exports = {
    // Para salvar o like precisamos de duas informações primordiais
    async store(req, res) {
        // Para acessar um parâmetro que vem através da rota utilizamos
        // O req.params, no caso, req.params.devId
        
        // E para acessar o dado dentro do header usamos
        // req.headers.user

        // Então vamos usar a desestruturação
        const { user } = req.headers;
        const { devId } = req.params;

        // E agora vamos buscar as duas instâncias desses usuários no banco
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        // Se o targetDev não existir, vamos dar um erro

        if (!targetDev) {
            return res.status(400).json({ error: 'Dev does not exists.'});
        }

        // Se deu certo, vamos jogar o cara que ele deu like lá dentro
        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};