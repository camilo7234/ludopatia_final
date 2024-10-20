const jwt = require('jsonwebtoken');

// Simulación de una base de datos de usuarios (podrías cambiarlo según tu implementación real)
const users = [
    { id: 1, username: 'usuario', password: '123456' }  // Usuario de ejemplo
];

const login = (req, res) => {
    const { username, password } = req.body;

    // Buscar el usuario en la "base de datos"
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Generar el token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
};

module.exports = {
    login
};
