const profesionalModel = require('../models/profesionalModel');

const getProfesionales = async (req, res) => {
    try {
        const profesionales = await profesionalModel.getProfesionales();
        res.status(200).json(profesionales);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProfesionalById = async (req, res) => {
    try {
        const profesional = await profesionalModel.getProfesionalById(req.params.id);
        if (profesional) {
            res.status(200).json(profesional);
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
};
