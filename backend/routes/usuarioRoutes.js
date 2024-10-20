const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas para gestionar usuarios
router.get('/', authMiddleware, usuarioController.getUsuarios);
router.get('/:id', authMiddleware, usuarioController.getUsuarioById);
router.post('/', usuarioController.createUsuario); // Ruta para crear un usuario
router.put('/:id', authMiddleware, usuarioController.updateUsuario);
router.delete('/:id', authMiddleware, usuarioController.deleteUsuario);

// Ruta para autenticación de usuarios
router.post('/login', usuarioController.loginUsuario);

module.exports = router;
