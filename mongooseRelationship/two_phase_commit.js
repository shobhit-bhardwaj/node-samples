const mongoose = require('mongoose');
const Fawn = require('fawn');

Fawn.init(mongoose);

mongoose.connect('mongodb://localhost/test_db')
	.then((result) => console.log('MongoDB Connection Successfull'))
	.catch((error) => console.log('Error in Connection - ', error));

const UserAccount = mongoose.model('UserAccount', mongoose.Schema({
	userName: String,
	amount: Number
}));

async function updateAccount() {
	let result1 = await new UserAccount({userName: 'Shobhit', amount: 5000}).save();
	console.log('User Account 1 - ', result1);

	let result2 = await new UserAccount({userName: 'Rajesh', amount: 5000}).save();
	console.log('User Account 2 - ', result2);

	try {
		new Fawn.Task()
			.update('useraccounts', {userName: 'Shobhit'}, {
				$inc: {amount: -100}
			})
			.update('useraccounts', {userName: 'Rajesh'}, {
				$inc: {amount: 100}
			}).run();
	} catch(ex) {
		console.log(ex);
	}
}

updateAccount();
