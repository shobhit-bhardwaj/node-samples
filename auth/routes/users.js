const express = require('express');
const {User, validateUser, validatePassword} = require('../model/user');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/register', async (request, response) => {
	//console.log(request.body);

	let result = validateUser(request.body);
	if(result.error)
		return response.status(400).send(result.error.details[0].message);

	result = validatePassword(request.body.password);
	if(result.error)
		return response.status(400).send(result.error.details[0].message);

	let user = await User.findOne({email: request.body.email})
	if(user)
		return response.status(400).send('User Already Registered.');

	user = new User(_.pick(request.body, ['name', 'email', 'password', 'isAdmin']));
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);
	user = await user.save();

	response.send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;
