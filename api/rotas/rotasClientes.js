const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');
router.post('/cadastrar', clientesController.criar);
router.post('/autenticar', clientesController.autenticar);
router.delete('/deletar', clientesController.removeCliente);
router.get('/:clienteId', clientesController.consultaCliente);
module.exports = router;