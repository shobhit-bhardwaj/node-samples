const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_db')
	.then((result) => console.log('MongoDB Connection Successfull'))
	.catch((error) => console.log('Error in Connection - ', error));

const Author = mongoose.model('Author', mongoose.Schema({
	name: String,
	biography: String,
	website: String
}));

const Course = mongoose.model('Course', mongoose.Schema({
	name: String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Author'
	}
}));

/*const author = new Author({name: 'Khalid Mudgal', biography: 'this is a dummy biography', website: 'www.someweblink.com'});
author.save()
	.then(result => console.log(result))
	.catch(error => console.log(error));*/

/*const course = new Course({name: 'Java Language Fundamental', author: '5b9a1f332cf7762190d4f5f9'});
course.save()
	.then(result => console.log(result))
	.catch(error => console.log(error));*/

Course.find()
	.populate('author', '-_id name website')
	.then(result => console.log(result))
	.catch(error => console.log(error));
