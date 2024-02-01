function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if (n < 1) {
   return ('RangeError: Please enter a number greater than 1')
  }
  if (n > 1000000) {
    return ('RangeError: Please enter a number less than 1000001')
  }
  return 1 / n
}
console.log(reciprocal(.99))
module.exports = {
  returnsThree,
  reciprocal
};
