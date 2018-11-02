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

exports.destroy = (req, res) => {
    let { favorite_id} = req.params;
    let { id } = req.user;
    User.findById(id, (err, user) => {
        if (err) res.json({success: false, err});
        let unfavorite = user.favorites.id(favorite_id);
        if (unfavorite){
            unfavorite.remove();
            console.log("USER", user)
            user.save((err, user) => {
                if (err) res.json({success: false, err});
                res.json({success: true, favorites: user.favorites})
            })
        }else {
            res.json({success: false, payload: "Favorite does not exist."});
        }
    })
}