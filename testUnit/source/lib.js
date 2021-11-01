module.exports = {
	greet: function(name) {
		return 'Welcome ' + name;
	},

	absolute: function(number) {
		return (number >= 0) ? number : -number;
	},

	listCurrencies: function() {
		return ['AUD', 'USD', 'EUR', 'GBP'];
	},

	getUser: function() {
		return {'userId': 101, 'userName': 'Shobhit'};
	},

	registerUser: function(userName) {
		if(!userName)
			throw Error('Enter Valid UserName');
		return {userId: Date.now(), userName: userName};
	}
}