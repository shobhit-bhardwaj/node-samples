const express = require('express');
const {Course, validateCourse} = require('../model/course');
const router = express.Router();

router.get('/', async (request, response, next) => {
	try {
		const courses = await Course.find().sort('name');
		throw Error('There is some Error')

		response.send(courses);
	} catch(ex) {
		next(ex);
	}
});

module.exports = router;
