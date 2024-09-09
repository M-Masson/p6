const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const bookctrl = require('../controllers/books');

router.post('/', auth, multer, bookctrl.createBook);
router.put('/:id', auth, multer, bookctrl.modifyBook);
router.delete('/:id', auth, bookctrl.deleteBook);
router.get('/:id', bookctrl.getOneBook);
router.get('/',  bookctrl.getAllBooks);
router.get('/:id/rating',auth, bookctrl.rating );
router.get('/bestrating', auth, bookctrl.getBestRating);

module.exports = router;