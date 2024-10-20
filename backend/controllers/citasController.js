const citasModel = require('../models/citasModel');

const getCitas = async (req, res) => {
    try {
        const citas = await citasModel.getCitas();
        res.status(200).json(citas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCitaById = async (req, res) => {
    try {
        const cita = await citasModel.getCitaById(req.params.id);
        if (cita) {
            res.status(200).json(cita);
        } else {
            res.status(404).json({ message: 'Cita no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCita = async (req, res) => {
    try {
        const newCita = await citasModel.createCita(req.body);
        res.status(201).json(newCita);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCita = async (req, res) => {
    try {
        const updatedCita = await citasModel.updateCita(req.params.id, req.body);
        if (updatedCita) {
            res.status(200).json(updatedCita);
        } else {
            res.status(404).json({ message: 'Cita no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCita = async (req, res) => {
    try {
        const deletedCita = await citasModel.deleteCita(req.params.id);
        if (deletedCita) {
            res.status(200).json(deletedCita);
        } else {
            res.status(404).json({ message: 'Cita no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCitas,
    getCitaById,
    createCita,
    updateCita,
    deleteCita,
};
