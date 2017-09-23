var moment = require('moment');

var sameTimestamp = moment().valueOf();
console.log(sameTimestamp);



var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY'));
console.log(date.format('h:mm a'));