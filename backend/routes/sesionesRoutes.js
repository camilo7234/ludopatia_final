const express = require('express');
const router = express.Router();
const sesionesController = require('../controllers/sesionesController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, sesionesController.getSesiones);
router.get('/:id', authMiddleware, sesionesController.getSesionById);
router.post('/', authMiddleware, sesionesController.createSesion);
router.put('/:id', authMiddleware, sesionesController.updateSesion);
router.delete('/:id', authMiddleware, sesionesController.deleteSesion);

module.exports = router;
