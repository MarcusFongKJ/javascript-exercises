const convertToCelsius = function(fahrenheitTemp) {
  let temp  = (fahrenheitTemp - 32) * (5/9);
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(celciusTemp) {
  let temp = (celciusTemp * (9/5) + 32);
  return Math.round(temp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
