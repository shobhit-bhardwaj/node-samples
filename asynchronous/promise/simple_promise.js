const resolvePromise = Promise.resolve(1);
resolvePromise
	.then(result => console.log('resolvePromise Result - ', result));

const rejectPromise = Promise.reject(new Error(1));
rejectPromise
	.catch(error => console.log('rejectPromise Result - ', error));

const success = true;
const promise = new Promise((resolve, reject) => {
	//	Some ASync Work
	setTimeout(() => {
		if(success)
			resolve('Hello From ASync Promise.');
		else
			reject(new Error('Error Occurred.'));
	}, 2000);
});

promise
	.then(result => console.log('Result - ', result))
	.catch(error => console.log('Error - ', error.message));
