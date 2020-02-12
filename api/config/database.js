/**
 * @author Edison Maciel <maciel.eds@gmail.com>
 * @file Configuração do banco de dados e string de conexão.
 * @since 02/2020
 */

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
const mongoDB = 'mongodb://admin:datausers*@ds025232.mlab.com:25232/data-users';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;