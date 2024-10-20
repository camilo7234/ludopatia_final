const pool = require('../config/db');

const getSesiones = async () => {
    const res = await pool.query('SELECT * FROM sesiones');
    return res.rows;
};

const getSesionById = async (id) => {
    const res = await pool.query('SELECT * FROM sesiones WHERE id = $1', [id]);
    return res.rows;
};

const createSesion = async (sesion) => {
    const { paciente_id, profesional_id, nota_sesion } = sesion;
    const res = await pool.query(
        'INSERT INTO sesiones (paciente_id, profesional_id, nota_sesion) VALUES ($1, $2, $3) RETURNING *',
        [paciente_id, profesional_id, nota_sesion]
    );
    return res.rows;
};

const updateSesion = async (id, sesion) => {
    const { nota_sesion } = sesion;
    const res = await pool.query(
        'UPDATE sesiones SET nota_sesion = $1 WHERE id = $2 RETURNING *',
        [nota_sesion, id]
    );
    return res.rows;
};

const deleteSesion = async (id) => {
    const res = await pool.query('DELETE FROM sesiones WHERE id = $1 RETURNING *', [id]);
    return res.rows;
};

module.exports = {
    getSesiones,
    getSesionById,
    createSesion,
    updateSesion,
    deleteSesion,
};
