const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const pool = require('./config/db');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const pacienteRoutes = require('./routes/pacienteRoutes');
const profesionalRoutes = require('./routes/profesionalRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

app.use('/api/pacientes', pacienteRoutes);
app.use('/api/profesionales', profesionalRoutes);
app.use('/api/usuarios', usuarioRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
