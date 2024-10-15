const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

router.get('/', pacienteController.getPacientes);
router.get('/:id', pacienteController.getPacienteById);

module.exports = router;
