const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');	//	Default

app.get('/', (request, response) => {
	response.render('index', {title: 'Template Engine Application', message: 'Hello From Template Engine Application.'});
});

app.listen(3000, () => {
	console.log('Server Start on Port - 3000');
});
