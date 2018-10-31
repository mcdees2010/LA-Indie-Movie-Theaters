const Favorite = require('../models/Favorite');

exports.index = (req, res) => {
    Favorite.find({}, (err, favorites) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, favorites});
    })
}

exports.create = (req, res) => {
    Favorite.create(req.body, (err, favorites) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, favorites});
    })
}

exports.show = (req, res) => {
    Favorite.findById(req.params.id, (err, favorites) => {
        if (err) res.json({success: false, err});
        res.json({success: true, favorites});
    })
}

exports.update = (req, res) => {
    let { body, params } = req;
    Favorite.findByIdAndUpdate(params.id, body, { new: true}, (err, favorites) => {
        if (err) res.json({success: false, err});
        res.json({success: true, favorites});
    })
}

exports.destroy = (req, res) => {
    let { id } = req.params
    Favorite.findByIdAndDelete(id, (err, favorites) => {
        if (err) res.json({success: false, err});
        res.json({success: true, favorites});
    })
}