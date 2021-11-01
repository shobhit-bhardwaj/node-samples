const logger = require('winston');

module.exports = function (error, request, response, next) {
	logger.error(error.message, error);

	return response.status(500).send('Some Internal Error');
	next();
}
