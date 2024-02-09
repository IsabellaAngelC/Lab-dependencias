var includes = require('array-includes');
var assert = require('assert');
var arr = [ 'one', 'two' ];


console.log(includes(arr, 'one')); // true
includes(arr, 'three'); // false
includes(arr, 'one', 1); // false

const removeItemFromArray = require('array-remove-item')

const abcde = removeItemFromArray(['a', 'b', 'b', 'c', 'd', 'e'], 1)
console.log(abcde) // ['a', 'b', 'c', 'd', 'e']