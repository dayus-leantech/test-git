const { add } = require('./sumar');
const { multiply, square } = require('./multiply');
const { rest } = require('./Restar');

console.log('add: ', add(1, 4));
console.log('multiply: ', multiply(4, 7));
console.log('square: ', square(49));
console.log('rest: ', rest(34, 76));
