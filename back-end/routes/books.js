const express = require('express');
const router = express.Router();
const auth = require('../midleware/auth');
const bookctrl = require('../controllers/books');

router.post('/', auth, bookctrl.createBook);
router.put('/:id', auth, bookctrl.modifyBook);
router.delete('/:id', auth, bookctrl.deleteBook);
router.get('/:id', auth, bookctrl.getOneBook);
router.get('/', auth, bookctrl.getAllBooks);

module.exports = router;