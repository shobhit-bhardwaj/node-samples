const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', (data) => {
	console.log('Message Logged - ', data);
});

emitter.emit('messageLogged', {'id': 101, 'message': 'This is Test Message'});