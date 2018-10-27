const mongoose = require('mongoose');

const TheaterSchema = new mongoose.Schema({
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

// theaterId: String,
// favorited: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},