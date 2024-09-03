const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  autor: { type: String, required: true },
  genre: { type: String, required: true },
  year:  {type: String, required: true},
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  rating: { type: Number, required: true },
});

module.exports = mongoose.model('Book', bookSchema);