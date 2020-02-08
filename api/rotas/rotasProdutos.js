const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');
router.get('/', produtosController.getAll);
router.post('/', produtosController.adicionaProduto);
router.get('/:produtoId', produtosController.getById);
router.delete('/:produtoId', produtosController.deleteById);
module.exports = router;