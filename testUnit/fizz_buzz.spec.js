const fizzBuzz = require('./source/fizz_buzz');

describe('Fizz Buzz', () => {
	it('Alphabat Error', ()=> {
		expect(() => fizzBuzz('abc')).toThrow();

		const result = fizzBuzz(1);
		expect(result).toBe(1);
	});

	it('FizzBuzz Test', ()=> {
		const result = fizzBuzz(15);
		expect(result).toBe('FizzBuzz');
	});

	it('Fizz Test', ()=> {
		const result = fizzBuzz(3);
		expect(result).toBe('Fizz');
	});

	it('Buzz Test', ()=> {
		const result = fizzBuzz(5);
		expect(result).toBe('Buzz');
	});

	it('Number Test', ()=> {
		const result = fizzBuzz(7);
		expect(result).toBe(7);
	});
});
