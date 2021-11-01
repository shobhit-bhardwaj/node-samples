var fs = require('fs');

function readFromFileSystem() {
	var path = './nodeExamples/module/fileModule/readFromFileSystem/sample.txt';

	fs.readFile(path, "utf8", (error, data) => {
		if(error)
			console.log('Error - ', error);
		else
			console.log('Data - ', data)
	});
};

readFromFileSystem();