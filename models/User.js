const
	mongoose = require('mongoose'),
	bcrypt = require('bcrypt-nodejs'),
	FavoriteSchema = new mongoose.Schema({
		movieId: String,
		title: String,
		seen: Boolean,
		wantToSee: Boolean
	}),
	userSchema = new mongoose.Schema({
		name: { type: String },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		favorites: [FavoriteSchema]
    })
    
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

userSchema.pre('save', function(next) {
	if(this.isModified('password')) {
		this.password = this.generateHash(this.password)
	}
	next()
})

const User = mongoose.model('User', userSchema)
module.exports = User;