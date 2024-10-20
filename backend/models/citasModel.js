const pool = require('../config/db');

const getCitas = async () => {
    const res = await pool.query('SELECT * FROM citas');
    return res.rows;
};

const getCitaById = async (id) => {
    const res = await pool.query('SELECT * FROM citas WHERE id = $1', [id]);
    return res.rows;
};

const createCita = async (cita) => {
    const { paciente_id, profesional_id, fecha, hora, motivo } = cita;
    const res = await pool.query(
        'INSERT INTO citas (paciente_id, profesional_id, fecha, hora, motivo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [paciente_id, profesional_id, fecha, hora, motivo]
    );
    return res.rows;
};

const updateCita = async (id, cita) => {
    const { fecha, hora, motivo } = cita;
    const res = await pool.query(
        'UPDATE citas SET fecha = $1, hora = $2, motivo = $3 WHERE id = $4 RETURNING *',
        [fecha, hora, motivo, id]
    );
    return res.rows;
};

const deleteCita = async (id) => {
    const res = await pool.query('DELETE FROM citas WHERE id = $1 RETURNING *', [id]);
    return res.rows;
};

module.exports = {
    getCitas,
    getCitaById,
    createCita,
    updateCita,
    deleteCita,
};
