const express = require('express');
const router = express.Router();
const movieController = require('../controller/produtosController');
router.get('/', movieController.getAll);
router.post('/', movieController.adicionaProduto);
router.get('/:produtoId', movieController.getById);
router.delete('/:produtoId', movieController.deleteById);
module.exports = router;