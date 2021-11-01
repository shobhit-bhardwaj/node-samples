const lib = require('./source/lib');

/*test('Greet', () => {
	const result = lib.greet('Shobhit');
	expect(result).toMatch(/Shobhit/);
});*/

//	describe can be nested at any level.
describe('Greet', () => {
	it('Name', ()=> {
		const result = lib.greet('Shobhit');
		expect(result).toMatch(/Shobhit/);
	});
});

describe('Absolute', () => {
	it('Positive Number', () => {
		const result = lib.absolute(1);
		expect(result).toBe(1);
	});

	it('Negative Number', () => {
		const result = lib.absolute(-1);
		expect(result).toBe(1);
	});

	it('Zero', () => {
		const result = lib.absolute(0);
		expect(result).toBe(0);
	});
});

describe('Currencies', () => {
	it('Too General', () => {
		const result = lib.listCurrencies();
		expect(result).toBeDefined();
		expect(result).not.toBeNull();
	});
	
	it('Too Specific', () => {
		const result = lib.listCurrencies();
		expect(result[0]).toBe('AUD');
		expect(result[1]).toBe('USD');
		expect(result[2]).toBe('EUR');
		expect(result[3]).toBe('GBP');
		expect(result.length).toBe(4);
	});

	it('Proper', () => {
		const result = lib.listCurrencies();
		expect(result).toContain('AUD');
		expect(result).toContain('USD');
		expect(result).toContain('EUR');
		expect(result).toContain('GBP');
	});

	it('Ideal', () => {
		const result = lib.listCurrencies();
		expect(result).toEqual(expect.arrayContaining(['AUD', 'USD', 'EUR', 'GBP']));
	});
});

describe('User', () => {
	it('Get', ()=> {
		const result = lib.getUser();

		//expect(result).toEqual({'userId' : 101, 'userName' : 'Shobhit'});
		expect(result).toMatchObject({'userId' : 101, 'userName' : 'Shobhit'});
		expect(result).toHaveProperty('userId', 101);
		expect(result).toHaveProperty('userName', 'Shobhit');
	});

	it('Register', ()=> {
		const values = [null, undefined, NaN, '', 0, false];

		values.forEach(value => {
			expect(() => lib.registerUser(value)).toThrow();
		});

		const user = lib.registerUser('Shobhit');
		expect(user).toMatchObject({userName: 'Shobhit'});
		expect(user.userId).toBeGreaterThan(0);
	});
});
