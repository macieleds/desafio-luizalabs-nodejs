const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');
router.post('/cadastrar', clientesController.criar);
router.post('/autenticar', clientesController.autenticar);
router.get('/', clientesController.getAll);
router.get('/:clienteId', clientesController.consultaCliente);
router.delete('/deletar', clientesController.removeCliente);

module.exports = router;