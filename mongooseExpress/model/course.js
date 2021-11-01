const mongoose = require('mongoose');
const Joi = require('joi');

const Course = mongoose.model("Course", mongoose.Schema({
	name: {
		type: String,
		required: true,
		minLength: 5,
		maxLength: 100,
		trim: true
	},
	category: {
		type: String,
		required: true,
		enum: ['WEB', 'MOBILE'],
		uppercase: true,
		//lowercase: true,
		trim: true
	},
	author: String,
	tags: {
		type: Array,
		validate: {
			validator: function(value) {
				return value && value.length > 0;
			},
			message: 'Please Provide Atleast One Tag.'
		}
		//	ASync Validator
		/*validate: {
			isAsync: true,
			validator: function(value, callback) {
				setTimeout(() => {
					const result = value && value.length > 0;
					callback(result);
				}, 5000);
			},
			message: 'Please Provide Atleast One Tag.'
		}*/
	},
	releaseDate: { type: Date, default: Date.now },
	isPublished: Boolean,
	price: {
		type: Number,
		min: 5,
		max: 100,
		required: function() {
			return this.isPublished;
		},
		get: value => Math.round(value),
		set: value => Math.round(value)
	}
}));

function validateCourse(course) {
	const courseSchema = {
		name: Joi.string().min(5).max(100).required(),
		category: Joi.string().min(3).max(10).required(),
		author: Joi.string().required(),
		tags: Joi.array().required(),
		releaseDate: Joi.date(),
		isPublished: Joi.bool().required(),
		price: Joi.number().min(5).max(10)
	};

	return Joi.validate(course, courseSchema);
}

module.exports.Course = Course;
module.exports.validateCourse = validateCourse;
