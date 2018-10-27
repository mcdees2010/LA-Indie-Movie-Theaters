const Theater = require('../models/Theater');

exports.index = (req, res) => {
    Theater.find({}, (err, theaters) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, theaters});
    })
}

exports.create = (req, res) => {
    Theater.create(req.body, (err, createTheater) => {
        if (err) res.json({success: false, err});
        res.json({ success: false, createTheater});
    })
}
