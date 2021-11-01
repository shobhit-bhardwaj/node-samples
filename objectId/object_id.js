const mongoose = require('mongoose');

const object = mongoose.Types.ObjectId();
console.log('Object Id - ', object);
console.log('Time Stamp - ', object.getTimestamp());
console.log('Validate Object Id - ', mongoose.Types.ObjectId.isValid('5b9f3e70688b21047c7d6731'));

/*
 * 5b9f3e70688b21047c7d6731
 * 
 * Total	-	12 bytes
 * 4 bytes	-	Timestamp
 * 3 bytes	-	Machine Identifier
 * 2 bytes	-	Process Identifier
 * 3 bytes	-	Counter	(2^24 = 24M)
 * 
 */