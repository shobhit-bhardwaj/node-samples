var url = 'http://helper.io';

function log(message) {
	console.log(message);
}

/*module.exports.urlString = url;
module.exports.log = log;*/

module.exports = {
	urlString: url,
	logMessage: log
}