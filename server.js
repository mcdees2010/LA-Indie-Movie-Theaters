require('dotenv').config();

const express = require('express'),
      app = express(),
      logging = require('morgan'),
      mongoose = require('mongoose'),
      FavoriteRouter = require('./routes/FavoriteRouter'),
      userRouter = require('./routes/UserRouter'),
      path = require('path'),
      { PORT, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, err => {
    console.log(err || "Connected to MONGODB.")
})

app.use(logging('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "client", "build")));

app.use('/api/favorites', FavoriteRouter);
app.use('/api/users', userRouter);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, err => {
    console.log(err || `listening on port ${PORT}....`)
})