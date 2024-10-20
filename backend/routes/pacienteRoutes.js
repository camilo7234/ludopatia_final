const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas de pacientes
router.get('/', authMiddleware, pacienteController.getPacientes);
router.get('/:id', authMiddleware, pacienteController.getPacienteById);
router.post('/', authMiddleware, pacienteController.createPaciente);
router.put('/:id', authMiddleware, pacienteController.updatePaciente);
router.delete('/:id', authMiddleware, pacienteController.deletePaciente);
router.get('/search', authMiddleware, pacienteController.searchPacientes);

module.exports = router;
