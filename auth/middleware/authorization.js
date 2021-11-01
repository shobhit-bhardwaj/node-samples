const jwt = require('jsonwebtoken');

function authorization(request, response, next) {
	const token = request.header('x-auth-token');
	if(!token)
		return response.status(401).send('Access Denied, No Token Provided');

	try {
		const decoded = jwt.verify(token, 'my-private-key');
		request.user = decoded;
		next();
	} catch(ex) {
		return response.status(400).send('Invalid Token');
	}
}

module.exports = authorization;
