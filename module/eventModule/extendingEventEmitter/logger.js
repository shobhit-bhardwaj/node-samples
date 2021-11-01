const EventEmitter = require('events');

class Logger extends EventEmitter {
	logMessage(message) {
		this.emit('messageLogged', {'id': 101, 'message': message});
	}
}

module.exports = Logger;