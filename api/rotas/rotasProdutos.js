const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');

router.post('/adicionar', produtosController.adicionaProduto);
router.get('/', produtosController.getAll);
router.delete('/:produtoId', produtosController.deleteById);
module.exports = router;