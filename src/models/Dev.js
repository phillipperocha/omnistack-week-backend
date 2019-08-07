// Faremos uma desestruturação para importar o Schema e o model de dentro do Mongoose
const { Schema, model } = require('mongoose');

// E faremos agora a estrutura do meu banco de dados para armazenar um Dev
const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // Nossos devs terão o usuário do github onde pegaremos as infos
    user: {
        type: String,
        required: true,
    },
    // Quando apenas declaramos o tipo da variável, sem ser required podemos omitir o objeto
    bio: String,
    avatar: {
        type: String, // O avatar que pegaremos do github do usuário
        required: true,
    },
}, { // Passaremos uma vírgula e outro objeto aqui
    timestamps: true, // vai criar uma coluna de forma automática chamada createdAt
    // E também uma updatedAt que será a última data que foi alterada, e isso será feito
    // automaticamente.
});

// Agora vamos exportar o nosso modelo DevSchema como Dev
module.exports = model('Dev',  DevSchema);