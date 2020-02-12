/**
 * @author Edison Maciel <maciel.eds@gmail.com>
 * @file Esquema que será reproduzido no banco de dados
 * @since 
 */

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const saltRounds = 10;

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
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

// hash no password de cliente antes de salvar no banco de dados
clientesSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('clientes', clientesSchema);