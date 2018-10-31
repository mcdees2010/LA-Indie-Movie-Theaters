const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    movieId: String,
    title: String,
    pic: String
})

const Favorite = mongoose.model("Favorite", FavoriteSchema);

module.exports = Favorite;

// theaterId: String,
// favorited: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
// SHOWPAGE:
// location: String,
//     telephonenum: String,
//     websitelink: String

// present the showtimes to the user and movies currently showing at that theatre

// usermovies schema