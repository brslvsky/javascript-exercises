const fibonacci = function(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
