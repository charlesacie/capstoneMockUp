const express = require('express');
const musicController = require('../controllers/musicController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', musicController.getAllMusic);
router.post('/', authMiddleware, musicController.createMusic);
router.put('/:id', authMiddleware, musicController.updateMusic);
router.delete('/:id', authMiddleware, musicController.deleteMusic);

module.exports = router;
