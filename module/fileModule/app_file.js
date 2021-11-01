const fs = require('fs');

//	Sync Approach
const files = fs.readdirSync('./');
console.log('Files - ', files);

//	ASync Approach
fs.readdir('./', (error, files) => {
	if (error)
		console.log(error);
	else
		console.log('Files - ', files);
});