const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BooksSchema = new Schema({
  title: { type: String },
  authors: [{ type: String }],
  description: { type: String },
  image: { type: String },
  link: { type: String }
});

const Books = mongoose.model('books', BooksSchema);

// Export Model

module.exports = Books;
