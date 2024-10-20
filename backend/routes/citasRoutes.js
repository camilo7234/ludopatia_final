const express = require('express');
const router = express.Router();
const citasController = require('../controllers/citasController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, citasController.getCitas);
router.get('/:id', authMiddleware, citasController.getCitaById);
router.post('/', authMiddleware, citasController.createCita);
router.put('/:id', authMiddleware, citasController.updateCita);
router.delete('/:id', authMiddleware, citasController.deleteCita);

module.exports = router;
