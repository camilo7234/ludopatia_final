const pool = require('../../config/db');

const getUsuarios = async () => {
    const res = await pool.query('SELECT * FROM usuario');
    return res.rows;
};

const getUsuarioById = async (id) => {
    const res = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
    return res.rows;
};

module.exports = {
    getUsuarios,
    getUsuarioById,
};
