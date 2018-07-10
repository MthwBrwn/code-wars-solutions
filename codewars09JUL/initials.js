function abbrevName(name){
  // string given has two names
  let nameArray = name.split(" ");
  let initialArray=[]; 
  // split string at ""
  for (let i =0; i<nameArray.length; i++){
    initialArray.push(nameArray[i].charAt(0));
  }
  // console.log(initialArray);
  // take array and iterate on loop
  // return value 
  return (`${initialArray[0]}.${initialArray[1]}`).toUpperCase();
}
  