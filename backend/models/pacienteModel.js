const pool = require('../config/db');

const getPacientes = async () => {
    const res = await pool.query('SELECT * FROM paciente');
    return res.rows;
};

const getPacienteById = async (id) => {
    const res = await pool.query('SELECT * FROM paciente WHERE id = $1', [id]);
    return res.rows;
};

module.exports = {
    getPacientes,
    getPacienteById,
};
