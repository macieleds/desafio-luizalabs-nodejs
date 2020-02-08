const mongoose = require('mongoose');
const mongoDB = 'mongodb://admin:datausers*@ds025232.mlab.com:25232/data-users';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;