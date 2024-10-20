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
        if (usuario && usuario.length > 0) {
            res.status(200).json(usuario[0]);
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
        res.status(201).json(newUsuario[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const updatedUsuario = await usuarioModel.updateUsuario(req.params.id, req.body);
        if (updatedUsuario && updatedUsuario.length > 0) {
            res.status(200).json(updatedUsuario[0]);
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
        if (deletedUsuario && deletedUsuario.length > 0) {
            res.status(200).json(deletedUsuario[0]);
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

// Función para crear un administrador
const createAdmin = async (req, res) => {
    try {
        // Asumimos que el rol_id para administrador es 1, ajusta según tu esquema
        const adminData = {
            ...req.body,
            rol_id: 1  // Asigna el rol de administrador
        };
        const newAdmin = await usuarioModel.createUsuario(adminData);
        if (newAdmin && newAdmin.length > 0) {
            res.status(201).json(newAdmin[0]);
        } else {
            res.status(400).json({ message: 'No se pudo crear el administrador' });
        }
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
    createAdmin,
};