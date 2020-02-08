const express = require('express');
const router = express.Router();
const clientesController = require('../controller/clientesController');
router.post('/cadastrar', clientesController.criar);
router.post('/autenticar', clientesController.autenticar);
router.post('/deletar', clientesController.removeCliente);
router.post('/consultar', clientesController.consultaCliente);
module.exports = router;