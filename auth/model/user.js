const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const PasswordComplexity = require('joi-password-complexity');

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 50,
		trim: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		minLength: 5,
		maxLength: 255,
		trim: true
	},
	password: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 1024,
		trim: true
	},
	isAdmin: Boolean
});
userSchema.methods.generateAuthToken = function() {
	return jwt.sign({id: this._id, isAdmin: this.isAdmin}, 'my-private-key');
}

const User = mongoose.model("User", userSchema);

function validateUser(user) {
	const userSchema = {
		name: Joi.string().min(5).max(50).required(),
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required(),
		isAdmin: Joi.boolean()
	};

	return Joi.validate(user, userSchema);
}

function validatePassword(password) {
	const complexityOptions = {
		min: 5,
		max: 255,
		lowerCase: 1,
		upperCase: 1,
		numeric: 1,
		symbol: 1
		//requirementCount: 2
	};

	return Joi.validate(password, new PasswordComplexity(complexityOptions));
}

module.exports.User = User;
module.exports.validateUser = validateUser;
module.exports.validatePassword = validatePassword;
