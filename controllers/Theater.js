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
        res.json({ success: true, createTheater});
    })
}

exports.show = (req, res) => {
    Theater.findById(req.params.id, (err, showTheater) => {
        if (err) res.json({success: false, err});
        res.json({success: true, showTheater});
    })
}

exports.update = (req, res) => {
    let { body, params } = req;
    Theater.findByIdAndUpdate(params.id, body, { new: true}, (err, updateTheater) => {
        if (err) res.json({success: false, err});
        res.json({success: true, updateTheater});
    })
}

exports.destroy = (req, res) => {
    let { id } = req.params
    Theater.findByIdAndDelete(id, (err, deleteTheater) => {
        if (err) res.json({success: false, err});
        res.json({success: true, deleteTheater});
    })
}