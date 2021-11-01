const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_db')
	.then((result) => console.log('MongoDB Connection Successfull'))
	.catch((error) => console.log('Error in Connection - ', error));

const courseSchema = mongoose.Schema({
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
});

const Course = mongoose.model("Course", courseSchema);

const course = new Course({
	name: ' NodeJS  ',
	category: 'Web',
	author: 'Shobhit Bhardwaj',
	tags: ['nodejs', 'backend'],
	isPublished: true,
	price: 10.78
});

/*course.validate()
	.then(result => console.log('Result - ', result))
	.catch(error => console.log('Error - ', error.message));*/

course.save()
	.then(result => console.log('Result - ', result))
	.catch(exception => {
		for(index in exception.errors)
			console.log('Error - ', exception.errors[index].message);
	});
