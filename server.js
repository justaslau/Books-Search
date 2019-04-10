// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Loading Route Files
const books = require('./routes/api/books');

// Setting Up Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Successfully Connected'))
  .catch(err => console.log(err));

// Assign server PORT
const port = process.env.PORT || 8000;

// Assigning Routes
app.use('/api/books', books);

// Opening port to start server
app.listen(port, () => console.log(`Server is running on PORT ${port}`));

//https://www.googleapis.com/books/v1/volumes?q=harry+poter&key=AIzaSyD03qRgi5d_EqFYwYfnJPdNGkDEnrsgoYM
////
