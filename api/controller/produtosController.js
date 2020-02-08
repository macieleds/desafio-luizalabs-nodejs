module.exports = require("../model/produtos");

const produtosModel = require('../model/produtos');
module.exports = {
    getById: function(req, res, next) {
        console.log(req.body);
        produtosModel.findById(req.params.id, function(err, produtosInfo) {
            if (err) {
                next(err);
            } else {
                res.json({ status: "success", message: "Produto Encontrado", data: { produtos: produtosInfo } });
            }
        });
    },
    getAll: function(req, res, next) {
        let produtosList = [];
        produtosModel.find({}, function(err, produtos) {
            if (err) {
                next(err);
            } else {
                for (let produto of produtos) {
                    produtosList.push({ price: produto.price, image: produto.image, brand: produto.brand, id: produto._id, title: produto.title });
                }
                res.json({ status: "success", message: "Lista de Produtos Encontrada", data: { produtos: produtosList } });

            }
        });
    },
    deleteById: function(req, res, next) {
        produtosModel.findByIdAndRemove(req.params.produtoId, function(err, produtosInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Produto deletado com sucesso", data: null });
            }
        });
    },
    adicionaProduto: function(req, res, next) {
        produtosModel.adicionaProduto({ name: req.body.id }, function(err, result) {
            if (err)
                next(err);
            else
                res.json({ status: "success", message: "Produto adicionado com sucesso", data: null });

        });
    },
}