const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BooksSchema = new Schema({
  bookId: { type: String },
  title: { type: String },
  authors: [{ type: String }],
  description: { type: String },
  image: { type: String },
  link: { type: String },
  date: {
    type: Date,
    default: Date.now
  }
});

const Books = mongoose.model('books', BooksSchema);

// Export Model

module.exports = Books;
