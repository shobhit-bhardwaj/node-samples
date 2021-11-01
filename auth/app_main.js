const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/test_db')
	.then((result) => console.log('MongoDB Connection Successfull'))
	.catch((error) => console.log('Error in Connection - ', error));

const users = require('./routes/users');
const auth = require('./routes/auth');
const courses = require('./routes/courses');

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/courses', courses);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is Running on Port - ${port}`);
});
