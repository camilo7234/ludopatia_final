const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const pool = require('./backend/config/db');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const pacienteRoutes = require('./backend/routes/pacienteRoutes');
const profesionalRoutes = require('./backend/routes/profesionalRoutes');
const usuarioRoutes = require('./backend/routes/usuarioRoutes');
const diarioPacienteRoutes = require('./backend/routes/diarioPacienteRoutes');
const autoevaluacionRoutes = require('./backend/routes/autoevaluacionRoutes');
const chatRoutes = require('./backend/routes/chatRoutes');
const citasRoutes = require('./backend/routes/citasRoutes');
const sesionesRoutes = require('./backend/routes/sesionesRoutes');
const juegosAutoayudaRoutes = require('./backend/routes/juegosAutoayudaRoutes');
const adminRoutes = require('./backend/routes/adminRoutes');
console.log('pacienteRoutes:', typeof pacienteRoutes);
console.log('profesionalRoutes:', typeof profesionalRoutes);
console.log('usuarioRoutes:', typeof usuarioRoutes);
console.log('diarioPacienteRoutes:', typeof diarioPacienteRoutes);
console.log('autoevaluacionRoutes:', typeof autoevaluacionRoutes);
console.log('chatRoutes:', typeof chatRoutes);
console.log('citasRoutes:', typeof citasRoutes);
console.log('sesionesRoutes:', typeof sesionesRoutes);
console.log('juegosAutoayudaRoutes:', typeof juegosAutoayudaRoutes);
console.log('adminRoutes:', typeof adminRoutes);

app.use('/api/pacientes', pacienteRoutes);
app.use('/api/profesionales', profesionalRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/diarios', diarioPacienteRoutes);
app.use('/api/autoevaluaciones', autoevaluacionRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/citas', citasRoutes);
app.use('/api/sesiones', sesionesRoutes);
app.use('/api/juegos', juegosAutoayudaRoutes);
app.use('/api/admin', adminRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
