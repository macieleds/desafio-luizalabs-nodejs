const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientesSchema = new Schema({
    nome: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
    }
});


module.exports = mongoose.model('clientes', clientesSchema);