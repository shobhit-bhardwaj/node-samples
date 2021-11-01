const express = require('express');
const Joi = require('joi');
const authorization = require('../middleware/authorization');
const admin = require('../middleware/admin');
const router = express.Router();

const courses = [
	{ id: 1, name: 'course1'},
	{ id: 2, name: 'course2'},
	{ id: 3, name: 'course3'}
];

router.get('/', (request, response) => {
	response.send(courses);
});

router.get('/:courseId', (request, response) => {
	//console.log(request.params);

	const findCourse = courses.find(course => parseInt(request.params.courseId) === course.id);
	if(!findCourse)
		return response.status(404).send('Course Not Found');

	response.send(findCourse);
});

router.post('/', authorization, (request, response) => {
	//console.log(request.body);

	const result = validateCourse(request.body);
	if(result.error)
		return response.status(400).send(result.error);

	const newCourse = {
		id: courses.length + 1,
		name: request.body.name
	};
	courses.push(newCourse);

	response.send(newCourse);
});

router.put('/:courseId', authorization, (request, response) => {
	//console.log(request.params);
	//console.log(request.body);

	const result = validateCourse(request.body);
	if(result.error)
		return response.status(400).send(result.error);

	const findCourse = courses.find(course => parseInt(request.params.courseId) === course.id);
	if(!findCourse)
		return response.status(404).send('Course Not Found');

	findCourse.name = request.body.name;

	response.send(findCourse);
});

router.delete('/:courseId', [authorization, admin], (request, response) => {
	//console.log(request.params);

	const findCourse = courses.find(course => parseInt(request.params.courseId) === course.id);
	if(!findCourse)
		return response.status(404).send('Course Not Found');

	const index = courses.indexOf(findCourse);
	courses.splice(index, 1);

	response.send(findCourse);
});

function validateCourse(course) {
	const courseSchema = {
		name: Joi.string().min(3).required()
	};

	return Joi.validate(course, courseSchema);
}

module.exports = router;
