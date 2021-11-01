const Logger = require('./logger');

const logger = new Logger

logger.on('messageLogged', (data) => {
	console.log('Message Logged - ', data);
});

logger.logMessage('This is Test Message');