const mongoose = require('mongoose');

const TheaterSchema = new mongoose.Schema({
    theaterId: String,
    theatername: String,
    pic: String,
    location: String,
    telephonenum: String,
    moviesshowing: String,
    showtimes: String,
    websitelink: String
})

const Theater = mongoose.model("Theater", TheaterSchema);

module.exports = Theater;