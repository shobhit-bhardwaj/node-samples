var axios = require('axios');

var url = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
console.log('URL - ', url);

axios.get(url)
	.then(function (response) {
		//console.log('Response - ', response);
		console.log('Response Data - ', response.data);
	})
	.catch(function (error) {
		console.log('Error - ', error);
	});