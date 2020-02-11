const produtosModel = require('../model/produtos');


module.exports = {

    //Adiciona um novo produto
    adicionaProduto: function(req, res, next) {

        produtosModel.create({ price: req.body.price, image: req.body.image, brand: req.body.brand, id: req.body.id, title: req.body.title },
            function(err, result) {
                if (err)
                    next(err);
                else
                    res.json({ status: "success", message: "Produto adicionado com sucesso", data: null });
            });
    },

    //Retorna a lista dos produtos cadastrados
    getAll: function(req, res, next) {
        let listaProdutos = [];

        produtosModel.find({}, function(err, produtos) {
            if (err) {
                next(err);
            } else {
                for (let produto of produtos) {
                    listaProdutos.push({ _id: produto._id, price: produto.price, image: produto.image, brand: produto.brand, id: produto.id, title: produto.title });
                }
                res.json({ status: "success", message: "Lista de Produtos Encontrada", data: { produto: listaProdutos } });

            }
        });
    },

    //Remove um produto adicionado à lista através de seu ID
    deleteById: function(req, res, next) {
        produtosModel.findByIdAndRemove(req.params.produtoId, function(err, produtosInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Produto deletado com sucesso", data: null });
            }
        });
    },

}