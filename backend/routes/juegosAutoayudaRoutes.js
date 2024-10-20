const express = require('express');
const router = express.Router();
const juegosAutoayudaController = require('../controllers/juegosAutoayudaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, juegosAutoayudaController.getJuegos);
router.get('/:id', authMiddleware, juegosAutoayudaController.getJuegoById);
router.post('/', authMiddleware, juegosAutoayudaController.createJuego);
router.put('/:id', authMiddleware, juegosAutoayudaController.updateJuego);
router.delete('/:id', authMiddleware, juegosAutoayudaController.deleteJuego);

module.exports = router;
