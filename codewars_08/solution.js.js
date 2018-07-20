var gimme = function (inputArray) {
  const oldArray = inputArray.slice();
  inputArray.sort(function (a, b) {
  return a - b});
  let middleInt = inputArray[1];
  return oldArray.indexOf(middleInt);
};