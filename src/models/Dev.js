const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    // Vamos guardar dentro do Schema o id do desenvolvedores que demos likes e dislikes
    // Então vamos declarar o tipo do que vai entrar
    likes: [{
        type: Schema.Types.ObjectId, // Que é o formato do ID do mongo
        ref: 'Dev', // Referente a qual model? O dev.
    }],
    dislikes: [{
        type: Schema.Types.ObjectId, // Que é o formato do ID do mongo
        ref: 'Dev', // Referente a qual model? O dev.
    }],
}, {
    timestamps: true,
});

module.exports = model('Dev',  DevSchema);