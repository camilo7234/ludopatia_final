const pool = require('../config/db');

const getDiarios = async () => {
    const res = await pool.query('SELECT * FROM diario_paciente');
    return res.rows;
};

const getDiarioById = async (id) => {
    const res = await pool.query('SELECT * FROM diario_paciente WHERE id = $1', [id]);
    return res.rows;
};

const createDiario = async (diario) => {
    const { paciente_id, entrada } = diario;
    const res = await pool.query(
        'INSERT INTO diario_paciente (paciente_id, entrada) VALUES ($1, $2) RETURNING *',
        [paciente_id, entrada]
    );
    return res.rows;
};

const updateDiario = async (id, diario) => {
    const { entrada } = diario;
    const res = await pool.query(
        'UPDATE diario_paciente SET entrada = $1 WHERE id = $2 RETURNING *',
        [entrada, id]
    );
    return res.rows;
};

const deleteDiario = async (id) => {
    const res = await pool.query('DELETE FROM diario_paciente WHERE id = $1 RETURNING *', [id]);
    return res.rows;
};

module.exports = {
    getDiarios,
    getDiarioById,
    createDiario,
    updateDiario,
    deleteDiario,
};
