const usuarioModel = require('../models/usuarioModel');

const getUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioModel.getUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUsuarioById = async (req, res) => {
    try {
        const usuario = await usuarioModel.getUsuarioById(req.params.id);
        if (usuario) {
            res.status(200).json(usuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsuarios,
    getUsuarioById,
};
