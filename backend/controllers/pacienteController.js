const pacienteModel = require('../models/pacienteModel');

const getPacientes = async (req, res) => {
    try {
        const pacientes = await pacienteModel.getPacientes();
        res.status(200).json(pacientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPacienteById = async (req, res) => {
    try {
        const paciente = await pacienteModel.getPacienteById(req.params.id);
        if (paciente) {
            res.status(200).json(paciente);
        } else {
            res.status(404).json({ message: 'Paciente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getPacientes,
    getPacienteById,
};
