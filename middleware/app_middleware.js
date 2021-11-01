const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

//const NODE_ENV = process.env.NODE_ENV || 'development';
const NODE_ENV = app.get('env') || 'development';
console.log(`Node Environment - ${NODE_ENV}`);
if(NODE_ENV === 'development') {
	console.log('Morgan is Enable in Development Environment');
	app.use(morgan('tiny'));
}

app.use((request, response, next) => {
	console.log('Logging Middleware');
	next();
});

app.use((request, response, next) => {
	console.log('Authentication Middleware');
	next();
});

app.get('/', (request, response) => {
	response.send('Welcome to Middleware Application');
});

app.listen(3000, () => {
	console.log('Server is Running on Port - 3000');
});
