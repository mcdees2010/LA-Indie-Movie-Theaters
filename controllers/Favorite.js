const User = require('../models/User');

exports.create = (req, res) => {
    console.log("Favor");
    let { favorite_id } = req.user
    User.findById(favorite_id, (err, user) => {
        if (err) res.json({success: false, err});
        user.favorites.push({...req.body, author: req.user.id});
        user.save((err, favorite) => {
            if (err) res.json({success: false, err});
            res.redirect(`/favorites/${favorite_id}`)
        })
        /* push favorite data into user's favorites array */
        /* save the user */
        // wayfarer posts and places
    })

}

exports.destroy = (req, res) => {
    let { favorite_id, id } = req.params;
    User.findById(favorite_id, (err, user) => {
        if (err) res.json({success: false, err});
        let unfavorite = user.favorites.id(id);
        if (unfavorite){
            unfavorite.remove();
            user.save((err, user) => {
                if (err) res.json({success: false, err});
                res.redirect(`/favorites/${favorite_id}`);
            })
        }else {
            res.json({success: false, payload: "Post does not exist."});
        }
    })
}