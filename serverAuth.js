const jwt = require('jsonwebtoken'),
      user = require('./models/User'),
      { JWT_SECRET } = process.env;

function signToken(user){
    const userData = user.toObject()
    delete userData.password;
    return jwt.sign(userData, JWT_SECRET);
}

module.exports = { signToken };