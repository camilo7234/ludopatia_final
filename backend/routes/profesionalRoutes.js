// profesionalRoutes.js
const express = require('express');
const router = express.Router();
const profesionalController = require('../controllers/profesionalController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas de profesional
router.get('/', authMiddleware, profesionalController.getProfesionales);
router.get('/:id', authMiddleware, profesionalController.getProfesionalById);
router.post('/', authMiddleware, profesionalController.createProfesional);
router.put('/:id', authMiddleware, profesionalController.updateProfesional);
router.delete('/:id', authMiddleware, profesionalController.deleteProfesional);

module.exports = router;
