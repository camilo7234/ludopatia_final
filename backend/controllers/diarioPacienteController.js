const diarioPacienteModel = require('../models/diarioPacienteModel');

const getDiarios = async (req, res) => {
    try {
        const diarios = await diarioPacienteModel.getDiarios();
        res.status(200).json(diarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getDiarioById = async (req, res) => {
    try {
        const diario = await diarioPacienteModel.getDiarioById(req.params.id);
        if (diario) {
            res.status(200).json(diario);
        } else {
            res.status(404).json({ message: 'Diario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createDiario = async (req, res) => {
    try {
        const newDiario = await diarioPacienteModel.createDiario(req.body);
        res.status(201).json(newDiario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateDiario = async (req, res) => {
    try {
        const updatedDiario = await diarioPacienteModel.updateDiario(req.params.id, req.body);
        if (updatedDiario) {
            res.status(200).json(updatedDiario);
        } else {
            res.status(404).json({ message: 'Diario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteDiario = async (req, res) => {
    try {
        const deletedDiario = await diarioPacienteModel.deleteDiario(req.params.id);
        if (deletedDiario) {
            res.status(200).json(deletedDiario);
        } else {
            res.status(404).json({ message: 'Diario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getDiarios,
    getDiarioById,
    createDiario,
    updateDiario,
    deleteDiario,
};
