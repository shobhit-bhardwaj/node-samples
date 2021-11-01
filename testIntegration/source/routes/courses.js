const express = require('express');
const {Course, validateCourse} = require('../model/course');
const authorization = require('../middleware/authorization');
const router = express.Router();

router.get('/', async (request, response) => {
	response.send(await Course.find().sort('name'));
});

router.get('/:courseId', async (request, response) => {
	//console.log(request.params);

	const course = await Course.findById(request.params.courseId);
	if(!course)
		return response.status(404).send('Course Not Found');

	response.send(course);
});

router.post('/', authorization, async (request, response) => {
	//console.log(request.body);

	const result = validateCourse(request.body);
	if(result.error)
		return response.status(400).send(result.error);

	const course = new Course(request.body);

	response.send(await course.save());
});

router.put('/:courseId', async (request, response) => {
	//console.log(request.params);
	//console.log(request.body);

	const result = validateCourse(request.body);
	if(result.error)
		return response.status(400).send(result.error);

	const course = await Course.findByIdAndUpdate(request.params.courseId, request.body, {
		new: true
	});
	if(!course)
		return response.status(404).send('Course Not Found');

	response.send(course);
});

router.delete('/:courseId', async (request, response) => {
	//console.log(request.params);

	const course = await Course.findByIdAndRemove(request.params.courseId);
	if(!course)
		return response.status(404).send('Course Not Found');

	response.send(course);
});

module.exports = router;
