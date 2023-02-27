const convertToCelsius = function(num) {
  let celsius = ((num - 32) * 5 / 9);
  if (celsius != 0) {
    return parseFloat(celsius.toFixed(1));
  }
  return celsius;

};

const convertToFahrenheit = function(num) {
  let farenheit = (num * 9 / 5 + 32);
  if (farenheit != 0) {
    return parseFloat(farenheit.toFixed(1));
  }
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
