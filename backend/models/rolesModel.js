const pool = require('../config/db'); // Conexión a la base de datos

const getRoles = async () => {
    const result = await pool.query('SELECT * FROM roles');
    return result.rows;
};

module.exports = {
    getRoles,
};
