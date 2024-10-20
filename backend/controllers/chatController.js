const chatModel = require('../models/chatModel');

const getChats = async (req, res) => {
    try {
        const chats = await chatModel.getChats();
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getChatById = async (req, res) => {
    try {
        const chat = await chatModel.getChatById(req.params.id);
        if (chat) {
            res.status(200).json(chat);
        } else {
            res.status(404).json({ message: 'Chat no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createChat = async (req, res) => {
    try {
        const newChat = await chatModel.createChat(req.body);
        res.status(201).json(newChat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateChat = async (req, res) => {
    try {
        const updatedChat = await chatModel.updateChat(req.params.id, req.body);
        if (updatedChat) {
            res.status(200).json(updatedChat);
        } else {
            res.status(404).json({ message: 'Chat no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteChat = async (req, res) => {
    try {
        const deletedChat = await chatModel.deleteChat(req.params.id);
        if (deletedChat) {
            res.status(200).json(deletedChat);
        } else {
            res.status(404).json({ message: 'Chat no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getChats,
    getChatById,
    createChat,
    updateChat,
    deleteChat,
};
