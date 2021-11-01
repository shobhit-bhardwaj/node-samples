const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const courses = [
	{ id: 1, name: 'course1'},
	{ id: 2, name: 'course2'},
	{ id: 3, name: 'course3'}
];

app.get('/', (request, response) => {
	response.send('Welcome to Course Application');
});

app.get('/api/courses', (request, response) => {
	response.send(courses);
});

app.get('/api/courses/:courseId', (request, response) => {
	//console.log(request.params);

	const findCourse = courses.find(course => parseInt(request.params.courseId) === course.id);
	if(!findCourse)
		return response.status(404).send('Course Not Found');

	response.send(findCourse);
});

app.post('/api/courses', (request, response) => {
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

app.put('/api/courses/:courseId', (request, response) => {
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

app.delete('/api/courses/:courseId', (request, response) => {
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

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is Running on Port - ${port}`);
});
