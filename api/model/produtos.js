const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const MovieSchema = new Schema({
    produtos: [{
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
            required: true,
        },
        id: {
            type: String,
            trim: true,
            required: true,
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
    }],
});
module.exports = mongoose.model('Movie', MovieSchema)