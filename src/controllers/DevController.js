const axios = require('axios')
// Vamos importar o nosso modelo para instanciar um Dev
const Dev = require('../models/Dev')

module.exports = {
    async store(req, res) {
        const { username } = req.body

        // Antes de criar um usuário, vou ver se o usuário já existe em nossa base
        const userExists = await Dev.findOne({ user: username });
        // Se o usuário já existir no banco, vamos retorná-lo
        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        // Pegando os dados da API que queremos utilizar utilizando a desestruturação
        // ps: pegamos o avatar_url dentro de response.data e o chamamos de avatar
        const { name, bio, avatar_url: avatar } = response.data;

        // Criando um objeto dev no banco mongo
        const dev = await Dev.create({
            // como teremos name: name, bio: bio, avatar: avatar, podemos omití-los
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
};