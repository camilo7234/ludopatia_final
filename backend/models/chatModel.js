const pool = require('../config/db');

const getChats = async () => {
    const res = await pool.query('SELECT * FROM chat');
    return res.rows;
};

const getChatById = async (id) => {
    const res = await pool.query('SELECT * FROM chat WHERE id = $1', [id]);
    return res.rows;
};

const createChat = async (chat) => {
    const { paciente_id, profesional_id, mensaje } = chat;
    const res = await pool.query(
        'INSERT INTO chat (paciente_id, profesional_id, mensaje) VALUES ($1, $2, $3) RETURNING *',
        [paciente_id, profesional_id, mensaje]
    );
    return res.rows;
};

const updateChat = async (id, chat) => {
    const { mensaje } = chat;
    const res = await pool.query(
        'UPDATE chat SET mensaje = $1 WHERE id = $2 RETURNING *',
        [mensaje, id]
    );
    return res.rows;
};

const deleteChat = async (id) => {
    const res = await pool.query('DELETE FROM chat WHERE id = $1 RETURNING *', [id]);
    return res.rows;
};

module.exports = {
    getChats,
    getChatById,
    createChat,
    updateChat,
    deleteChat,
};
