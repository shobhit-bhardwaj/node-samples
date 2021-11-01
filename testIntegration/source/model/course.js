const mongoose = require('mongoose');
const Joi = require('joi');

const Course = mongoose.model("Course", mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	category: String,
	author: String,
	isPublished: Boolean,
	price: Number
}));

function validateCourse(course) {
	const courseSchema = {
		name: Joi.string().min(5).max(20).required(),
		category: Joi.string().min(5).max(10),
		author: Joi.string(),
		isPublished: Joi.bool(),
		price: Joi.number().min(5).max(10)
	};

	return Joi.validate(course, courseSchema);
}

module.exports.Course = Course;
module.exports.validateCourse = validateCourse;
