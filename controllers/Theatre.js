const Theatre = require('../models/Theatre');

exports.index = (req, res) => {
    Theatre.find({}, (err, theatres) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, theatres});
    })
}

exports.create = (req, res) => {
    Theatre.create(req.body, (err, createTheatre) => {
        if (err) res.json({success: false, err});
        res.json({ success: true, createTheatre});
    })
}

exports.show = (req, res) => {
    Theatre.findById(req.params.id, (err, showTheatre) => {
        if (err) res.json({success: false, err});
        res.json({success: true, showTheatre});
    })
}

exports.update = (req, res) => {
    let { body, params } = req;
    Theatre.findByIdAndUpdate(params.id, body, { new: true}, (err, updateTheatre) => {
        if (err) res.json({success: false, err});
        res.json({success: true, updateTheatre});
    })
}

exports.destroy = (req, res) => {
    let { id } = req.params
    Theatre.findByIdAndDelete(id, (err, deleteTheatre) => {
        if (err) res.json({success: false, err});
        res.json({success: true, deleteTheatre});
    })
}