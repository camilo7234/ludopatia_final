const pool = require('../config/db');

const getJuegos = async () => {
    const res = await pool.query('SELECT * FROM juegos_autoayuda');
    return res.rows;
};

const getJuegoById = async (id) => {
    const res = await pool.query('SELECT * FROM juegos_autoayuda WHERE id = $1', [id]);
    return res.rows;
};

const createJuego = async (juego) => {
    const { paciente_id, juego: nombreJuego, resultado } = juego;
    const res = await pool.query(
        'INSERT INTO juegos_autoayuda (paciente_id, juego, resultado) VALUES ($1, $2, $3) RETURNING *',
        [paciente_id, nombreJuego, resultado]
    );
    return res.rows;
};

const updateJuego = async (id, juego) => {
    const { juego: nombreJuego, resultado } = juego;
    const res = await pool.query(
        'UPDATE juegos_autoayuda SET juego = $1, resultado = $2 WHERE id = $3 RETURNING *',
        [nombreJuego, resultado, id]
    );
    return res.rows;
};

const deleteJuego = async (id) => {
    const res = await pool.query('DELETE FROM juegos_autoayuda WHERE id = $1 RETURNING *', [id]);
    return res.rows;
};

module.exports = {
    getJuegos,
    getJuegoById,
    createJuego,
    updateJuego,
    deleteJuego,
};
