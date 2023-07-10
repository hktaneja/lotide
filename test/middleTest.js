const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1], []);
assertArraysEqual([1, 2], []);

assertArraysEqual([1, 2, 3], [2]);
assertArraysEqual([1, 2, 3, 4, 5], [3]);

assertArraysEqual([1, 2, 3, 4], [2, 3]);
assertArraysEqual([1, 2, 3, 4, 5, 6], [3, 4]);

module.exports = middle;