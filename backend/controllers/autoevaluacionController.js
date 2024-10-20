const autoevaluacionModel = require('../models/autoevaluacionModel');

const getAutoevaluaciones = async (req, res) => {
    try {
        const autoevaluaciones = await autoevaluacionModel.getAutoevaluaciones();
        res.status(200).json(autoevaluaciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAutoevaluacionById = async (req, res) => {
    try {
        const autoevaluacion = await autoevaluacionModel.getAutoevaluacionById(req.params.id);
        if (autoevaluacion) {
            res.status(200).json(autoevaluacion);
        } else {
            res.status(404).json({ message: 'Autoevaluación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createAutoevaluacion = async (req, res) => {
    try {
        const newAutoevaluacion = await autoevaluacionModel.createAutoevaluacion(req.body);
        res.status(201).json(newAutoevaluacion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateAutoevaluacion = async (req, res) => {
    try {
        const updatedAutoevaluacion = await autoevaluacionModel.updateAutoevaluacion(req.params.id, req.body);
        if (updatedAutoevaluacion) {
            res.status(200).json(updatedAutoevaluacion);
        } else {
            res.status(404).json({ message: 'Autoevaluación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteAutoevaluacion = async (req, res) => {
    try {
        const deletedAutoevaluacion = await autoevaluacionModel.deleteAutoevaluacion(req.params.id);
        if (deletedAutoevaluacion) {
            res.status(200).json(deletedAutoevaluacion);
        } else {
            res.status(404).json({ message: 'Autoevaluación no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAutoevaluaciones,
    getAutoevaluacionById,
    createAutoevaluacion,
    updateAutoevaluacion,
    deleteAutoevaluacion,
};
