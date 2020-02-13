const express = require('express');
const router = express.Router();
const produtosController = require('../controller/produtosController');

router.post('/adicionar', produtosController.adicionaProduto);
router.get('/', produtosController.consultaLista);
router.delete('/:produtoId', produtosController.removeProduto);
module.exports = router;