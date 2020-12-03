const mongoose = require('mongoose')

const socialPostSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true
    },
    foto: {
        texto: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    foto: {
        criado: {
            type: Boolean,
            required: true
        },
        publicado: {
            type: Boolean,
            required: true
        }
    },
    dataDeCriacao: {
        type: Date,
        required: true,
        default: Date.now
    },
    dataDeModificacao: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('SocialPost', socialPostSchema)