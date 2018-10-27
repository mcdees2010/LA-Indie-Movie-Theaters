require('dotenv').config();

const express = require('express'),
      app = express(),
      logging = require('morgan'),
      mongoose = require('mongoose'),
      TheaterRouter = require('./routes/TheaterRouter'),
      { PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, err => {
    console.log(err || "Connected to MONGODB.")
})

app.use(logging('dev'));
app.use(express.json());
app.use('/api/theaters', TheaterRouter);


app.listen(PORT, err => {
    console.log(err || `listening on port ${PORT}....`)
})