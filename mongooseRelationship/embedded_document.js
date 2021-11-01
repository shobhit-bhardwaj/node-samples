const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_db')
	.then((result) => console.log('MongoDB Connection Successfull'))
	.catch((error) => console.log('Error in Connection - ', error));

const authorSchema = mongoose.Schema({
	name: String,
	biography: String,
	website: String
});
const Course = mongoose.model('Course', mongoose.Schema({
	name: String,
	author: {
		type: authorSchema,
		required: true
	}
}));

const course = new Course({name: 'Java Language Fundamental', author: {name: 'Khalid Mudgal', biography: 'this is a dummy biography', website: 'www.someweblink.com'}});

course.save()
	.then(result => console.log(result))
	.catch(error => console.log(error));

Course.find()
	.then(result => console.log(result))
	.catch(error => console.log(error));
