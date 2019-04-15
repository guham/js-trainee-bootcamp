// Let sum be a function that takes to
// arguments: a and b, both numbers.
// Return the sum of.
function sum(a, b) {
  return a + b;
}

sum(1, 2); // 3

// write a function called log data that
// prints into the console the
// variable data
var data = 10;

function logData() {
  console.log(data);
}

logData();

// write a function called logNumber that
// prints to the console the variable
// num passed as an argument.
// If the variable is not passed (undefined)
// print 0 instead
function logNumber(num = 0) {
  console.log(num);
}

logNumber(10); // 10
logNumber(); // 0

// write a function called logAsArray
// that takes n amount of arguments
// and print an array containing
// all of the elements
function logAsArray(...nums) {
  console.log(nums);
}

logAsArray(1, 2); // [1,2]
logAsArray(1, 2, 3); // [1,2,3]
logAsArray(1, 2, 3, 4, 5); // [1,2,3,4,5]

// write a function called logArray
// that takes an array as argument
// and prints every element of
// the array
function logArray(nums) {
  nums.forEach(num => console.log(num));
}

logArray([1, 2, 3, 4, 5]);
// 1
// 2
// 3
// 4
// 5