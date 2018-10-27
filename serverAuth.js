const jwt = require('jsonwebtoken'),
      user = require('./models/User'),
      { JWT_SECRET } = process.env;

function signToken(user){
    const userData = user.toObject()
    delete userData.password;
    return jwt.sign(userData, JWT_SECRET);
}

function verifyToken(req, res){
    const token = req.get('token')
    if('token') return res.json({success: false, message: "No Token Provided."});
    jwt.verify(token, JWT_SECRET, (err, decodedData) => {
        if (err) res.json({success: false, message: "invalid token"});
        user.findById(decodedData._id, (err, user) => {
            if (err) res.json({success: false, message: "invalid token"});
            res.user = user;
            next();
        })
    })
}

module.exports = { signToken, verifyToken };