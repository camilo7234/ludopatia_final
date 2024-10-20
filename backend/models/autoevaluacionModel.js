const pool = require('../config/db');

const getAutoevaluaciones = async () => {
    const res = await pool.query('SELECT * FROM autoevaluacion');
    return res.rows;
};

const getAutoevaluacionById = async (id) => {
    const res = await pool.query('SELECT * FROM autoevaluacion WHERE id = $1', [id]);
    return res.rows;
};

const createAutoevaluacion = async (autoevaluacion) => {
    const { paciente_id, resultado } = autoevaluacion;
    const res = await pool.query(
        'INSERT INTO autoevaluacion (paciente_id, resultado) VALUES ($1, $2) RETURNING *',
        [paciente_id, resultado]
    );
    return res.rows;
};

const updateAutoevaluacion = async (id, autoevaluacion) => {
    const { resultado } = autoevaluacion;
    const res = await pool.query(
        'UPDATE autoevaluacion SET resultado = $1 WHERE id = $2 RETURNING *',
        [resultado, id]
    );
    return res.rows;
};

const deleteAutoevaluacion = async (id) => {
    const res = await pool.query('DELETE FROM autoevaluacion WHERE id = $1 RETURNING *', [id]);
    return res.rows;
};

module.exports = {
    getAutoevaluaciones,
    getAutoevaluacionById,
    createAutoevaluacion,
    updateAutoevaluacion,
    deleteAutoevaluacion,
};
