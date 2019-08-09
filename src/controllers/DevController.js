const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        // Queremos buscar na base todos os usuários que não são nem o usuário logado
        // Nem os usuários que ele deu like nem os que deu dislike
        // Temos que adicionar três filtros, e eles funcionam como 'and' e não como 'or'
        // Ou seja, a nossa condição tem que passar nos três filtros.
        // Pra isso colocamos $and: por volta dos filtros
        const users = await Dev.find({
            $and: [
                // Queremos usuários que o ID seja diferente do usuario logado
                { _id: { $ne: user } }, // $ne é notEqual, ou seja, me trás todo mundo que não é o user
                { _id: { $nin: loggedDev.likes } }, // $nin é notIn, ou seja, os usuários que não estejam nessa lista
                { _id: { $nin: loggedDev.dislikes} }
            ]
        });

        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body

        const userExists = await Dev.findOne({ user: username });
        
        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
        });

        return res.json(dev);
    }
};