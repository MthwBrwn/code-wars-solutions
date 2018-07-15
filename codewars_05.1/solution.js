function validatePIN (pin) {
  let reggie= /^[0-9]{4}$|^[0-9]{6}$/
  return reggie.test(pin);
  //return true or false
}