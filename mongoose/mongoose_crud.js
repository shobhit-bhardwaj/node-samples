const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test_db')
	.then((result) => console.log('MongoDB Connection Successfull'))
	.catch((error) => console.log('Error in Connection - ', error));

const courseSchema = mongoose.Schema({
	name: String,
	author: String,
	tags: [String],
	releaseDate: { type: Date, default: Date.now },
	price: Number,
	isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
	const course = new Course({
		name: 'Node',
		author: 'Shobhit Bhardwaj',
		tags: ['node', 'backend'],
		price: 10,
		isPublished: true
	});

	const result = await course.save();
	console.log('Save Result - ', result);
}

async function getCourses() {
	const courses = await Course
		.find({author: 'Shobhit Bhardwaj'})
		//.find({author: /^Shobhit/})				//	Starts With Shobhit
		//.find({author: /Bhardwaj$/})				//	Ends With Bhardwaj
		//.find({author: /shobhit bhardwaj/i})		//	Case Insensitive
		//.find({author: /.*bhit.*/})				//	Contains bhit
		//.find({price: {$gt: 5, $lt:20 }})			//	eq ne gt gte lt lte in nin

		//.or([{author: 'Shobhit Bhardwaj'}, {isPublished: false}])
		//.and([{author: 'Shobhit Bhardwaj'}, {isPublished: false}])

		.limit(10)

		.sort({name: 1})	//	.sort({name: -1})
		//.sort('name')		//	.sort('-name')

		.select({name: 1, author: 1, tags: 1, price: 1})
		//.select('name author tags price')

		//.count()
		;

	console.log('Query Result - ', courses);
}

async function getCoursesPageination() {
	const pageNumber = 1;
	const pageSize = 5;
	const courses = await Course
		.find()
		.skip((pageNumber-1) * pageSize)
		.limit(pageSize)
		.sort({name: 1})
		.select({name: 1, author: 1, tags: 1, price: 1});

	console.log('Pagination Query Result - ', courses);
}

/*
 * Query First
 * 1. findById
 * 2. Modify Values
 * 3. save()
 */
async function updateCourseQueryFirst(id) {
	const course = await Course.findById(id);
	console.log('Course Found - ', course);
	if(!course)
		return;

	course.price = 15;
	/*course.set({
		price: 15
	});*/

	const updatedCourse = await course.save();
	console.log('Updated Course - ', updatedCourse);
}
/*
 * Update First - Update Directly
 */
async function updateCourseUpdateFirst(id) {
	const result = await Course.update({_id: id}, {
		$set: {
			isPublished: false
		}
	});
	//	$set $unset $inc $min $max $mul $rename
	console.log('Result', result);

	const course = await Course.findByIdAndUpdate(id, {
		$set: {
			isPublished: true
		}
	}, {new: true});
	console.log('Course - ', course);
}

async function deleteCourse(id) {
	const result = await Course.deleteOne({_id: id});
	//const result = await Course.deleteMany({_id: id});
	console.log('Result', result);

	const course = await Course.findByIdAndRemove(id);
	console.log('Course - ', course);
}

createCourse();
//getCourses();
//getCoursesPageination();
//updateCourseQueryFirst('5b90d2631bb9411abcd312e6');
//updateCourseUpdateFirst('5b90d2631bb9411abcd312e6');
//deleteCourse('5b90cdffccac750f2c9239d8');
