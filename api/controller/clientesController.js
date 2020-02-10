const clientesModel = require('../model/clientes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {

    //Cria um novo usuário
    criar: function(req, res, next) {

        clientesModel.create({ nome: req.body.nome, email: req.body.email },
            function(err, result) {
                if (err)
                    next(err);
                else
                    res.json({ status: "success", message: "Cadastro realizado com sucesso.", data: null });
            });
    },

    //Autentica o usuário e gera uma JSONWebToken
    autenticar: function(req, res, next) {
        clientesModel.findOne({ nome: req.body.nome }, function(err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.email, userInfo.email)) {
                    const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({ status: "success", message: "Usuário autenticado.", data: { clientes: userInfo, token: token } });
                } else {
                    res.json({ status: "error", message: "E-mail inválido", data: null });
                }
            }
        });
    },

    //Consulta um cliente 

    consultaCliente: function(req, res, next) {

        clientesModel.findById(req.params._id, function(err, clientesInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Cliente Encontrado", data: { clientes: clientesInfo } });
            }
        });
    },

    getAll: function(req, res, next) {
        let dadosUsuario = [];
        clientesModel.find({}, function(err, movies) {
            if (err) {
                next(err);
            } else {
                for (let cliente of clientes) {
                    dadosUsuario.push({ id: cliente._id, nome: cliente.nome, email: cliente.email });
                }
                res.json({ status: "success", message: "Movies list found!!!", data: { movies: dadosUsuario } });

            }
        });
    },

    //Remove um cliente 
    removeCliente: function(req, res, next) {
        clientesModel.removeCliente(req.params.email, function(err, userInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Cliente excluído com sucesso.", data: null });
            }
        });
    },
}