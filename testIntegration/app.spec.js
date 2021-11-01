const request = require('supertest');
const { Course } = require('./source/model/course');

let server;

describe('/api/course', () => {
	beforeEach(async () => {
		server = require('./source/app_main');

		await Course.collection.insertMany([
			{name: 'course1'},
			{name: 'course2'},
			{name: 'course3'}
		]);
	});

	afterEach(async () => {
		server.close();

		await Course.remove({});
	});

	describe('/GET', () => {
		it('Get All Courses', async ()=> {
			const response = await request(server).get('/api/courses');
			expect(response.status).toBe(200);
			expect(response.body.length).toBe(3);
			expect(response.body.some(course => course.name === 'course1')).toBeTruthy();
			expect(response.body.some(course => course.name === 'course2')).toBeTruthy();
			expect(response.body.some(course => course.name === 'course3')).toBeTruthy();
		});

		it('Get Course By Id', async ()=> {
			const course = new Course({name: 'course1'});
			await course.save();

			const response = await request(server).get('/api/courses/' + course._id);
			expect(response.status).toBe(200);
			expect(response.body).toHaveProperty('name', course.name);
		});

		it('Auth Error, Add New Course', async ()=> {
			const response = await request(server)
				.post('/api/courses').send({name: 'course1'});
			expect(response.status).toBe(401);
		});

		it('Course Length Validation, Add New Course Successfully', async ()=> {
			//const name = new Array(15).join('a');
			const name = new Array(4).join('a');
			const response = await request(server)
				.post('/api/courses')
				.set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYTA5MDdiNzQ2MDMyMjBiNDdiZTFhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTUzNzI0OTQyOX0.08wLe2ZxM-HU7smCV06gI2Rgtk_SBzweOc3_4RQAe0o')
				.send({name: name});
			expect(response.status).toBe(400);
		});

		it('Add New Course Successfully', async ()=> {
			const response = await request(server)
				.post('/api/courses')
				.set('x-auth-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViYTA5MDdiNzQ2MDMyMjBiNDdiZTFhZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTUzNzI0OTQyOX0.08wLe2ZxM-HU7smCV06gI2Rgtk_SBzweOc3_4RQAe0o')
				.send({name: 'course1'});

			const course = await Course.find({name: 'course1'});

			expect(response.status).toBe(200);
			expect(course).not.toBeNull();
		});

		/*it('Invalid Id', async ()=> {
			const response = await request(server).get('/api/courses/1');
			expect(response.status).toBe(404);
		});*/
	});
});
