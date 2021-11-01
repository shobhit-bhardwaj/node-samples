const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://l4dvidap6393/integration_test_db')
	.then((result) => console.log('MongoDB Connection Successfull'))
	.catch((error) => console.log('Error in Connection - ', error));


app.get('/', (request, response) => {
	response.send('Welcome to Course Application');
});

const courses = require('./routes/courses');
app.use('/api/courses', courses);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
	console.log(`Server is Running on Port - ${port}`);
});

module.exports = server;
