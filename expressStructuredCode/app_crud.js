const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
	response.send('Welcome to Course Application');
});

const courses = require('./routes/courses');
app.use('/api/courses', courses);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is Running on Port - ${port}`);
});
