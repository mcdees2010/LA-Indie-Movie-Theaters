const User = require('../models/User');

exports.create = (req, res) => {
    let { id } = req.user
    User.findById(id, (err, user) => {
        if (err) res.json({success: false, err});
        user.favorites.push({...req.body});
        user.save((err, user) => {
            if (err) res.json({success: false, err});
            res.json({ success: true, favorites: user.favorites})
        })
    })
}

exports.update = (req, res) => {
    let { favorite_id } = req.params;
    let { seen, wantToSee } = req.body;
    let { id } = req.user;
    User.findByIdAndUpdate(id, {new: true}, (err, user) => {
        if (err) res.json({success: false, err});
        let movie = user.favorites.id(favorite_id);
        if(!movie){
            res.json({success: false, message: "Movie not found"});
        }
        movie.seen = seen;
        movie.wantToSee = wantToSee;
        user.save((err, user) => {
            if (err) res.json({success: false, err});
            res.json({success: true, favorites: user.favorites})
        })
    })
}


exports.destroy = (req, res) => {
    let { favorite_id} = req.params;
    let { id } = req.user;
    User.findById(id, (err, user) => {
        if (err) res.json({success: false, err});
        let unfavorite = user.favorites.id(favorite_id);
        if (unfavorite){
            unfavorite.remove();
            user.save((err, user) => {
                if (err) res.json({success: false, err});
                res.json({success: true, favorites: user.favorites})
            })
        }else {
            res.json({success: false, payload: "Favorite does not exist."});
        }
    })
}
