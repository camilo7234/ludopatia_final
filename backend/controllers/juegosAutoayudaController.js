const juegosAutoayudaModel = require('../models/juegosAutoayudaModel');

const getJuegos = async (req, res) => {
    try {
        const juegos = await juegosAutoayudaModel.getJuegos();
        res.status(200).json(juegos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getJuegoById = async (req, res) => {
    try {
        const juego = await juegosAutoayudaModel.getJuegoById(req.params.id);
        if (juego) {
            res.status(200).json(juego);
        } else {
            res.status(404).json({ message: 'Juego no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createJuego = async (req, res) => {
    try {
        const newJuego = await juegosAutoayudaModel.createJuego(req.body);
        res.status(201).json(newJuego);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateJuego = async (req, res) => {
    try {
        const updatedJuego = await juegosAutoayudaModel.updateJuego(req.params.id, req.body);
        if (updatedJuego) {
            res.status(200).json(updatedJuego);
        } else {
            res.status(404).json({ message: 'Juego no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteJuego = async (req, res) => {
    try {
        const deletedJuego = await juegosAutoayudaModel.deleteJuego(req.params.id);
        if (deletedJuego) {
            res.status(200).json(deletedJuego);
        } else {
            res.status(404).json({ message: 'Juego no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getJuegos,
    getJuegoById,
    createJuego,
    updateJuego,
    deleteJuego,
};
