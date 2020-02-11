/**
 * @author Edison Maciel <maciel.eds@gmail.com>
 * @file Orquestração das regras de negócio
 * @since 
 */

const clientesModel = require('../model/clientes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {

    //Cria um novo usuário
    criar: function(req, res, next) {

        clientesModel.create({ nome: req.body.nome, email: req.body.email, password: req.body.password },
            function(err, result) {
                if (err)
                    next(err);
                else
                    res.json({ status: "success", message: "Cadastro realizado com sucesso.", data: null });
            });
    },

    //Autentica o usuário e gera uma JSONWebToken
    autenticar: function(req, res, next) {
        clientesModel.findOne({ email: req.body.email }, function(err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({ id: userInfo._id }, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({ status: "success", message: "Usuário autenticado.", data: { clientes: userInfo, token: token } });
                } else {
                    res.json({ status: "error", message: "Dados inválidos.", data: null });
                }
            }
        });
    },

    //Consulta cliente pelo ID gerado
    consultaCliente: function(req, res, next) {
        console.log(req.body);
        clientesModel.findById(req.params.clienteId, function(err, clientesInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Usuário encontrado!", data: { clientes: clientesInfo } });
            }
        });
    },

    updateById: function(req, res, next) {
        clientesModel.findByIdAndUpdate(req.params.movieId, { nome: req.body.nome, email: req.body.email, password: req.body.password }, function(err, movieInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Dados alterados com sucesso!", data: null });
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