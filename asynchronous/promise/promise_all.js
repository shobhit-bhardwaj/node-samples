const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('ASync Operation 1');
		resolve('Result 1');
		//reject(new Error('Error Occurred'));
	}, 2000);
});

const p2 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('ASync Operation 2');
		resolve('Result 2');
	}, 3000);
});

Promise.all([p1, p2])
	.then(result => console.log('Result - ', result))
	.catch(error => console.log('Error - ', error));

/*Promise.race([p1, p2])
	.then(result => console.log(result));*/
