// authMiddleware.js
module.exports = (req, res, next) => {
    // Lógica de autenticación
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ error: 'Acceso denegado' });
    }

    try {
        // Verificar el token (ejemplo usando JWT)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token no válido' });
    }
};
