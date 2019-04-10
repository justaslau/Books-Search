const express = require('express');
const router = express.Router();
const Book = require('../../models/Books');

// @route   GET api/books
// @desc    Get all saved books
router.get('/', (req, res) => {
  Book.find({})
    .then(books => res.json(books))
    .catch(err => console.log(err));
});

// @route   POST api/books
// @desc    Add book to saved books collection
router.post('/', (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.desc,
    image: req.body.image,
    link: req.body.link
  });

  newBook
    .save()
    .then(book => res.json(book))
    .catch(err => console.log(err));
});

// @route   DELETE api/books/:id
// @desc    Delete saved book from database
router.delete('/:id', (req, res) => {
  Book.findByIdAndDelete({ _id: req.params.id })
    .then(book => res.json(book))
    .catch(err => res.status(404).json(err));
});

module.exports = router;

//test
