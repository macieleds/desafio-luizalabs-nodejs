/**
 * @author Edison Maciel <maciel.eds@gmail.com>
 * @file Orquestração das regras de negócio
 * @since 02/2020
 */

const produtosModel = require('../model/produtos');


module.exports = {

    //Adiciona um novo produto
    adicionaProduto: async function(req, res, next) {
        const { id } = req.body

        if (await produtosModel.findOne({ id })) {
            return res.status(400).json({ error: 'Produto já adicionado' })
        }
        produtosModel.create(req.body,
            function(err, result) {
                console.log(err);
                if (err)
                    next(err);
                else
                    res.json({ status: "success", message: "Produto adicionado com sucesso", data: null });
            });
    },

    //Retorna a lista dos produtos cadastrados
    getAll: async function(req, res, next) {
        const options = {
            page: req.query.page,
            limit: 100
        };

        const ads = await produtosModel.paginate({}, options)

        const retorno = {
            meta: {
                page_number: ads.page,
                page_size: ads.docs.length
            },
            products: ads.docs
        }

        return res.json(retorno)
            // produtosModel.find({}, function(err, produtos) {
            //     if (err) {
            //         next(err);
            //     } else {
            //         for (let products of produtos) {
            //             listaProdutos.push({
            //                 page_number: products.page_number,
            //                 page_size: products.page_size,
            //                 price: products.price,
            //                 image: products.image,
            //                 brand: products.brand,
            //                 id: products.id,
            //                 title: products.title
            //             });
            //         }

        //         const ads = await produtosModel.paginate(filters, {
        //             page: req.query.page || 1,
        //             limit: 2,
        //             populate: ['author'],
        //             sort: '-createdAt'
        //         })

        //         return res.json(ads)
        //         res.json({ status: "success", message: "Lista de Produtos Encontrada", data: { products: listaProdutos } });

        //     }
        // });
    },

    //Remove um produto adicionado à lista através de seu ID
    deleteById: function(req, res, next) {
        produtosModel.findByIdAndRemove(req.params.id, function(err, produtosInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Produto deletado com sucesso", data: null });
            }
        });
    },

}