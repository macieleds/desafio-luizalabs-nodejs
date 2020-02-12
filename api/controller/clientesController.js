/**
 * @author Edison Maciel <maciel.eds@gmail.com>
 * @file Orquestração das regras de negócio
 * @since 02/2020
 */

const clientesModel = require('../model/clientes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {

    //Cria um novo usuário
    criar: async function(req, res, next) {

        const { email } = req.body

        if (await clientesModel.findOne({ email })) {
            return res.status(400).json({ error: 'Email Já Cadastrado' })
        }

        clientesModel.create(req.body,
            function(err, result) {
                if (err)
                    next(err);
                else
                    res.json({ status: "success", message: "Cadastro realizado com sucesso.", data: null });
            });
    },

    //Autentica o usuário e gera uma JSONWebToken
    autenticar: function(req, res, next) {
        const { email, password } = req.body;
        clientesModel.findOne({ email }, function(err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(password, userInfo.password)) {
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
        clientesModel.findById(req.params.clienteId, function(err, clientesInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Usuário encontrado!", data: { clientes: clientesInfo } });
            }
        });
    },

    //Altera dados do cliente pelo ID gerado
    updateById: function(req, res, next) {
        clientesModel.findByIdAndUpdate(req.params.clienteId, req.body, function(err, clientesInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Dados alterados com sucesso!", data: null });
            }
        });
    },

    //Remove um cliente 
    removeCliente: function(req, res, next) {
        clientesModel.removeCliente(req.params.clienteId, function(err, userInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Cliente excluído com sucesso.", data: null });
            }
        });
    },
}