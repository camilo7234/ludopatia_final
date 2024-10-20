const express = require('express');
const router = express.Router();
const autoevaluacionController = require('../controllers/autoevaluacionController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, autoevaluacionController.getAutoevaluaciones);
router.get('/:id', authMiddleware, autoevaluacionController.getAutoevaluacionById);
router.post('/', authMiddleware, autoevaluacionController.createAutoevaluacion);
router.put('/:id', authMiddleware, autoevaluacionController.updateAutoevaluacion);
router.delete('/:id', authMiddleware, autoevaluacionController.deleteAutoevaluacion);

module.exports = router;
