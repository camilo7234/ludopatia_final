const usuarioModel = require('../models/usuarioModel');
const rolesModel = require('../models/rolesModel');

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

const createUsuario = async (req, res) => {
    try {
        const newUsuario = await usuarioModel.createUsuario(req.body);
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await usuarioModel.updateUsuario(req.params.id, req.body);
        if (updatedUsuario) {
            res.status(200).json(updatedUsuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUsuario = async (req, res) => {
    try {
        const deletedUsuario = await usuarioModel.deleteUsuario(req.params.id);
        if (deletedUsuario) {
            res.status(200).json(deletedUsuario);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getRoles = async (req, res) => {
    try {
        const roles = await rolesModel.getRoles();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Agregar la función createAdmin
const createAdmin = async (req, res) => {
    try {
        // Asumiendo que tiene una función en usuarioModel para crear un administrador
        const newAdmin = await usuarioModel.createAdmin(req.body);
        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
    getRoles,
    createAdmin, // Asegúrese de exportar la nueva función
};