const winston = require('winston');
require('winston-mongodb');

winston.add(winston.transports.File, {filename: 'logfile.log'});
winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/test_db'});

process.on('unhandledRejection', (ex) => {
	winston.error(ex.message, ex);
	//process.exit(1);
});

const promise = Promise.reject('Rejecting the Promise');
