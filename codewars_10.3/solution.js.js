function find_average(array) {
  let sumOfArray = array.reduce((Acc,currentVal) => Acc + currentVal);
  return sumOfArray/array.length;
}