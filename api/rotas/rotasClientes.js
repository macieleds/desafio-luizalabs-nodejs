const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');
router.post('/cadastrar', clientesController.criar);
router.post('/autenticar', clientesController.autenticar);
router.get('/:clienteId', clientesController.consultaCliente);
router.put('/:clienteId', clientesController.updateById);
router.delete('/clienteId', clientesController.removeCliente);

module.exports = router;