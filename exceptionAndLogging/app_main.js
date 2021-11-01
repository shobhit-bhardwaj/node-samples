//require('express-async-errors');
const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');
require('winston-mongodb');
const app = express();
app.use(express.json());

//winston.add(winston.transports.Console, {name: 'console_info', colorize: true, prettyPrint: true, level: 'info'});
winston.add(winston.transports.File, {filename: 'logfile.log'});
winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/test_db'});

mongoose.connect('mongodb://localhost/test_db')
	.then((result) => winston.info('MongoDB Connection Successfull'))
	.catch((error) => winston.error('Error in Connection - ', error));

const courses = require('./routes/courses');
app.use('/api/courses', courses);

const errorMiddleware = require('./middleware/error')
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
	winston.info(`Server is Running on Port - ${port}`);
});
