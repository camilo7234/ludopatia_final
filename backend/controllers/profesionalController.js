// profesionalController.js
const Profesional = require('../models/profesionalModel');

const getProfesionales = async (req, res) => {
    try {
        const profesionales = await Profesional.getProfesionales();
        res.status(200).json(profesionales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProfesionalById = async (req, res) => {
    try {
        const profesional = await Profesional.getProfesionalById(req.params.id);
        if (profesional) {
            res.status(200).json(profesional);
        } else {
            res.status(404).json({ message: 'Profesional no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createProfesional = async (req, res) => {
    try {
        const { nombre_completo, numero_tarjeta_profesional, especialidad } = req.body;
        const newProfesional = await Profesional.createProfesional({
            nombre_completo,
            numero_tarjeta_profesional,
            especialidad
        });
        res.status(201).json(newProfesional);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateProfesional = async (req, res) => {
    try {
        const { nombre_completo, numero_tarjeta_profesional, especialidad } = req.body;
        const updatedProfesional = await Profesional.updateProfesional(req.params.id, {
            nombre_completo,
            numero_tarjeta_profesional,
            especialidad
        });
        if (updatedProfesional) {
            res.status(200).json(updatedProfesional);
        } else {
            res.status(404).json({ message: 'Profesional no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProfesional = async (req, res) => {
    try {
        const deletedProfesional = await Profesional.deleteProfesional(req.params.id);
        if (deletedProfesional) {
            res.status(200).json(deletedProfesional);
        } else {
            res.status(404).json({ message: 'Profesional no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getProfesionales,
    getProfesionalById,
    createProfesional,
    updateProfesional,
    deleteProfesional,
};
