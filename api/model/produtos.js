const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const produtosSchema = new Schema({

    meta: {
        page_number: {
            type: Number,
            trim: true,
        },
        page_size: {
            type: Number,
            trim: true,
        },
    },
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