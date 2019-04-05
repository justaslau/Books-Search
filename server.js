// Dependencies
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Body parser middleware
app.use(express.urlencoded({ extended: false }));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Successfully Connected'))
  .catch(err => console.log(err));

// Assign server PORT
const port = process.env.PORT || 8000;

// Open port for server
app.listen(port, () => console.log(`Server is running on PORT ${port}`));
