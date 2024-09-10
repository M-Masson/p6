const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const bookctrl = require('../controllers/books');

router.get('/bestrating', bookctrl.getBestRating);

router.post('/', auth, multer, bookctrl.createBook);
router.put('/:id', auth, multer, bookctrl.modifyBook);
router.delete('/:id', auth, bookctrl.deleteBook);
router.get('/:id/rating',auth, bookctrl.rating );
router.get('/:id', bookctrl.getOneBook);

router.get('/',  bookctrl.getAllBooks);

module.exports = router;