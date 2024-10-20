const express = require('express');
const router = express.Router();
const diarioPacienteController = require('../controllers/diarioPacienteController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, diarioPacienteController.getDiarios);
router.get('/:id', authMiddleware, diarioPacienteController.getDiarioById);
router.post('/', authMiddleware, diarioPacienteController.createDiario);
router.put('/:id', authMiddleware, diarioPacienteController.updateDiario);
router.delete('/:id', authMiddleware, diarioPacienteController.deleteDiario);

module.exports = router;
