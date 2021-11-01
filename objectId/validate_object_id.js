const Joi = require('Joi');
Joi.objectId = require('joi-objectid')(Joi);

const userSchema = {
	userId: Joi.objectId().required()
};

function validate(user) {
	return Joi.validate(user, userSchema);
}

const user = {
	userId: '5b9f3e70688b21047c7d6731'
}

//console.log('User Validate - ', validate(user));
validate(user)
	.then(result => console.log('Result - ', result))
	.catch(error => console.log('Error - ', error));
