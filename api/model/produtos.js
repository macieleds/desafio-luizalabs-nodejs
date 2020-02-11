/**
 * @author Edison Maciel <maciel.eds@gmail.com>
 * @file Esquema que será reproduzido no banco de dados
 * @since 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const produtosSchema = new Schema({
    reviewScore: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },
    brand: {
        type: String,
        trim: true,
        required: true
    },
    id: {
        type: String,
        trim: true,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    }
});

module.exports = mongoose.model('produtos', produtosSchema)