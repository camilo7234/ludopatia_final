const pool = require('../config/db'); // Conexión a la base de datos

// Obtener todos los pacientes
exports.getPacientes = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM paciente');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los pacientes' });
    }
};

// Obtener un paciente por ID
exports.getPacienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM paciente WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el paciente' });
    }
};

// Crear un nuevo paciente
exports.createPaciente = async (req, res) => {
    const { nombre_completo, cedula, telefono, direccion, ciudad } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO paciente (nombre_completo, cedula, telefono, direccion, ciudad) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nombre_completo, cedula, telefono, direccion, ciudad]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el paciente' });
    }
};

// Actualizar un paciente existente
exports.updatePaciente = async (req, res) => {
    const { id } = req.params;
    const { nombre_completo, telefono, direccion, ciudad } = req.body;
    try {
        const result = await pool.query(
            'UPDATE paciente SET nombre_completo = $1, telefono = $2, direccion = $3, ciudad = $4 WHERE id = $5 RETURNING *',
            [nombre_completo, telefono, direccion, ciudad, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el paciente' });
    }
};

// Eliminar un paciente
exports.deletePaciente = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM paciente WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }
        res.json({ message: 'Paciente eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el paciente' });
    }
};

// Buscar pacientes por nombre o cédula
exports.searchPacientes = async (req, res) => {
    const { search } = req.query;
    try {
        const result = await pool.query(
            'SELECT * FROM paciente WHERE nombre_completo ILIKE $1 OR cedula ILIKE $1',
            [`%${search}%`]
        );
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar pacientes' });
    }
};
