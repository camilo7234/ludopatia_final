const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

const createUsuario = async (req, res) => {
    try {
        const { nombre_completo, email, contrasena, rol_id, usuario_id } = req.body;
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const newUsuario = await usuarioModel.createUsuario({
            nombre_completo,
            email,
            contrasena: hashedPassword,
            rol_id,
            usuario_id
        });
        res.status(201).json(newUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUsuario = async (req, res) => {
    try {
        const { nombre_completo, email, contrasena, rol_id, usuario_id } = req.body;
        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const updatedUsuario = await usuarioModel.updateUsuario(req.params.id, {
            nombre_completo,
            email,
            contrasena: hashedPassword,
            rol_id,
            usuario_id
        });
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

const loginUsuario = async (req, res) => {
    try {
        const { email, contrasena } = req.body;
        const usuario = await usuarioModel.getUsuarioByEmail(email);
        if (!usuario) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = jwt.sign({ id: usuario.id, rol_id: usuario.rol_id }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.status(200).json({ token });
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
    loginUsuario,
};
