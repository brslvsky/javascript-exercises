const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5/9);
  return Math.round(celsius * 10) / 10; // round to one decimal place
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * (9/5) + 32;
  return Math.round(fahrenheit * 10) / 10; // round to one decimal place
};
console.log(convertToCelsius(100))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
