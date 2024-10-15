const pool = require('../../config/db');

const getProfesionales = async () => {
    const res = await pool.query('SELECT * FROM profesional');
    return res.rows;
};

const getProfesionalById = async (id) => {
    const res = await pool.query('SELECT * FROM profesional WHERE id = $1', [id]);
    return res.rows;
};

module.exports = {
    getProfesionales,
    getProfesionalById,
};
