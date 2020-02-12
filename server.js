/**
 * @author Edison Maciel <maciel.eds@gmail.com>
 * @file Camada do servidor responsável por gerenciamento de rotas públicas, privadas, conexão com o banco, 
 * adição de ID ao request e tratamento de erro genérico.
 * @since 02/2020
 */

const express = require('express');
const logger = require('morgan');
const clientes = require('./api/rotas/rotasClientes');
const produtos = require('./api/rotas/rotasProdutos');
const bodyParser = require('body-parser');
const mongoose = require('../desafio-luizalabs-nodejs/api/config/database');
var jwt = require('jsonwebtoken');
const app = express();

app.set('secretKey', 'nodeRestApi'); //Token JWT

//Conexão com o banco de dados - MongoDB
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req, res) {
    res.json({ "Desafio Luizalabs": "API em NodeJS" });
});

//Rota pública
app.use('/clientes', clientes);


//Rota privada
app.use('/produtos', validaUsuario, produtos);

app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

function validaUsuario(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
        if (err) {
            res.json({ status: "error", message: err.message, data: null });
        } else {
            //Adiciona um ID de usuário ao request
            req.body.userId = decoded.id;
            next();
        }
    });

}

//Tratando erro 404
app.use(function(req, res, next) {
    let err = new Error('Não encontrado');
    err.status = 404;
    next(err);
});

//Retornando objeto de erro
app.use(function(err, req, res, next) {
    if (err.status === 404)
        res.status(404).json({ message: "Não encontrado" });
    else
        res.status(500).json({ message: "Internal Server Error" });
});

app.listen(3000, function() {
    console.log('Servidor ON - http://localhost:3000/');
});