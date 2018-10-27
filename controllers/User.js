const User = require('../models/User'),
      signToken = require('../serverAuth').signToken;

exports.index = (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, users});
    })
}

exports.create = (req, res) => {
    let { body } = req;
    User.create(body, (err, user) => {
        if (err) res.json({success: false, err});
        const token = signToken(user);
        res.json({success: true, token})
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
    User.findById(req.params.id, (err, user) => {
        if (!req.body.password) delete req.body.password
        Object.assign(user, req.body)
        user.save((err, updatedUser) => {
            if (err) res.json({success: false, err});
            res.json({success: true, user})
        })
    })
}

exports.destroy = (req, res) => {
    let { id } = req.params;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        if (err) res.json({success: false, err});
        res.json({success: true, deletedUser})
    })
}

exports.authenticate = (req, res) => {
    let { email, password } = req.body;
    User.findOne({email}, (err, user) => {
        if (!user || !user.validPassword(password)){
            return res.json({success: false, message: "invalid credentials"})
        }
        const token = signToken(user);
        res.json({success: true, token});
    })
}