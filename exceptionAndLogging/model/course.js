const mongoose = require('mongoose');
const Joi = require('joi');

const Course = mongoose.model("Course", mongoose.Schema({
	name: String,
	author: String,
	releaseDate: { type: Date, default: Date.now },
	price: {
		type: Number,
		min: 5,
		max: 100
	}
}));

function validateCourse(course) {
	const courseSchema = {
		name: Joi.string().min(5).max(100).required(),
		author: Joi.string().min(5).max(100).required(),
		releaseDate: Joi.date(),
		price: Joi.number().min(5).max(100)
	};

	return Joi.validate(course, courseSchema);
}

module.exports.Course = Course;
module.exports.validateCourse = validateCourse;
