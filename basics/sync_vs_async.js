/*
 * Synchronous means, a single waiter receives orders
 * and when he deliver order of first customer, then
 * he goes to second customer.
 * 
 * ASynchronous means, a single waiter receives order
 * of first customer, and whenever the order is preparing,
 * he took orders of other customers.
 * 
 * This is asynchronous, not multithreaded nor
 * parallel, because we have only one waiter.
 * 
 */


//	Synchronous

console.log("a");
console.log("b");
console.log("c");


//	ASynchronous

console.log("before");
setTimeout(() => {
	console.log('Waiting for an Operation to Perform.');
}, 2000);
console.log("after");
