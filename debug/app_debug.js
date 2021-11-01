const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:db');

//	set DEBUG=app:startup
//	set DEBUG=app:db
//	set DEBUG=app:*
//	DEBUG=app:startup nodemon app_debug.js		//	MAC

startupDebugger('Hello, This is Message from Startup Debugger.');
dbDebugger('Hello, This is Message from DB Debugger.');
