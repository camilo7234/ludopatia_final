const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, chatController.getChats);
router.get('/:id', authMiddleware, chatController.getChatById);
router.post('/', authMiddleware, chatController.createChat);
router.put('/:id', authMiddleware, chatController.updateChat);
router.delete('/:id', authMiddleware, chatController.deleteChat);

module.exports = router;
