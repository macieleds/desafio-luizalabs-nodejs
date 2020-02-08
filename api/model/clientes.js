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
    }
});

// hash user password before saving into database
clientesSchema.pre('save', function(next) {
    this.email = bcrypt.hashSync(this.email, saltRounds);
    next();
});


module.exports = mongoose.model('clientes', clientesSchema);