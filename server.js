require('dotenv').config();

const express = require('express'),
      app = express(),
      logging = require('morgan'),
      mongoose = require('mongoose'),
      TheatreRouter = require('./routes/TheatreRouter'),
      userRouter = require('./routes/UserRouter'),
      { PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, err => {
    console.log(err || "Connected to MONGODB.")
})

app.use(logging('dev'));
app.use(express.json());
app.use('/api/theatres', TheatreRouter);
app.use('/api/users', userRouter);
app.use(express.urlencoded({extended: true}));


app.listen(PORT, err => {
    console.log(err || `listening on port ${PORT}....`)
})