const sesionesModel = require('../models/sesionesModel');

const getSesiones = async (req, res) => {
    try {
        const sesiones = await sesionesModel.getSesiones();
        res.status(200).json(sesiones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getSesionById = async (req, res) => {
    try {
        const sesion = await sesionesModel.getSesionById(req.params.id);
        if (sesion) {
            res.status(200).json(sesion);
        } else {
            res.status(404).json({ message: 'Sesión no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createSesion = async (req, res) => {
    try {
        const newSesion = await sesionesModel.createSesion(req.body);
        res.status(201).json(newSesion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateSesion = async (req, res) => {
    try {
        const updatedSesion = await sesionesModel.updateSesion(req.params.id, req.body);
        if (updatedSesion) {
            res.status(200).json(updatedSesion);
        } else {
            res.status(404).json({ message: 'Sesión no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteSesion = async (req, res) => {
    try {
        const deletedSesion = await sesionesModel.deleteSesion(req.params.id);
        if (deletedSesion) {
            res.status(200).json(deletedSesion);
        } else {
            res.status(404).json({ message: 'Sesión no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getSesiones,
    getSesionById,
    createSesion,
    updateSesion,
    deleteSesion,
};
