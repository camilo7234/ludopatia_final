// profesionalModel.js
const pool = require('../config/db'); // Conexión a la base de datos

const getProfesionales = async () => {
    const result = await pool.query('SELECT * FROM profesional');
    return result.rows;
};

const getProfesionalById = async (id) => {
    const result = await pool.query('SELECT * FROM profesional WHERE id = $1', [id]);
    return result.rows[0];
};

const createProfesional = async (data) => {
    const { nombre_completo, numero_tarjeta_profesional, especialidad } = data;
    const result = await pool.query(
        'INSERT INTO profesional (nombre_completo, numero_tarjeta_profesional, especialidad) VALUES ($1, $2, $3) RETURNING *',
        [nombre_completo, numero_tarjeta_profesional, especialidad]
    );
    return result.rows[0];
};

const updateProfesional = async (id, data) => {
    const { nombre_completo, numero_tarjeta_profesional, especialidad } = data;
    const result = await pool.query(
        'UPDATE profesional SET nombre_completo = $1, numero_tarjeta_profesional = $2, especialidad = $3 WHERE id = $4 RETURNING *',
        [nombre_completo, numero_tarjeta_profesional, especialidad, id]
    );
    return result.rows[0];
};

const deleteProfesional = async (id) => {
    const result = await pool.query('DELETE FROM profesional WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
};

module.exports = {
    getProfesionales,
    getProfesionalById,
    createProfesional,
    updateProfesional,
    deleteProfesional,
};
