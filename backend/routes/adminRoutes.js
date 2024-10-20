const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas para gestionar usuarios
router.get('/usuarios', authMiddleware, adminController.getUsuarios);
router.get('/usuarios/:id', authMiddleware, adminController.getUsuarioById);
router.post('/usuarios', authMiddleware, adminController.createUsuario);
router.put('/usuarios/:id', authMiddleware, adminController.updateUsuario);
router.delete('/usuarios/:id', authMiddleware, adminController.deleteUsuario);

// Ruta para crear un administrador
router.post('/admin', authMiddleware, adminController.createAdmin);

// Rutas para gestionar roles
router.get('/roles', authMiddleware, adminController.getRoles);

module.exports = router;