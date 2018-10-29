const mongoose = require('mongoose');

const TheatreSchema = new mongoose.Schema({
    name: String,
    pic: String
})

const Theatre = mongoose.model("Theatre", TheatreSchema);

module.exports = Theatre;

// theaterId: String,
// favorited: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
// SHOWPAGE:
// location: String,
//     telephonenum: String,
//     moviesshowing: String,
//     showtimes: String,
//     websitelink: String