const config = require('config');

//set NODE_ENV=production
//set app_password=12345

console.log('NODE ENV - ', process.env.NODE_ENV);

console.log("Application Name - ", config.get('appName'));
console.log("Mail Host - ", config.get('mail.hostName'));
console.log("Password - ", config.get('mail.password'));
