const User = require('../models/User'),
      signToken = require('../routes/serverAuth').signToken;

exports.index = (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, users});
    })
}

exports.create = (req, res) => {
    let { body } = req;
    User.create(body, (err, createUser) => {
        if (err) res.json({success: false, err});
        res.json({success: true, createUser})
    })
}

exports.show = (req, res) => {
    let { id } = req.params;
    User.findById(id, (err, showUser) => {
        if (err) res.json({success: false, err});
        res.json({success: true, showUser})
    })
    
}

exports.update = (req, res) => {
    let { body, params } = req;
    User.findByIdAndUpdate(params.id, body, {new: true}, (err, updateUser) => {
        if (err) res.json({success: false, err});
        res.json({success: true, updateUser})
    })
}

exports.destroy = (req, res) => {
    let { id } = req.params;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        if (err) res.json({success: false, err});
        res.json({success: true, deletedUser})
    })
}