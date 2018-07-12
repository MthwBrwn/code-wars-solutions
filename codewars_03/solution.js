
function insertDash(num) {

  let stringNum = num.toString();
  //string to be built through loop
  let constructString = '';

  for(let i = 0; i < stringNum.length; i++) {
    constructString += stringNum[i];
    // is current position odd? using modulo
    if(parseInt(stringNum[i]) % 2 > 0) {
      //  check for next index in string
      if(stringNum[i + 1] % 2 > 0) {
        constructString += '-';
      }
    } 
  }
return constructString;
}

