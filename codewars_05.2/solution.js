function capitalize(s){
  let newStringOne = '';
  let newStringTwo = '';
    for (let i=0;i<s.length;i++) {

      if (i%2===0){
      newStringOne += (s.charAt(i).toUpperCase());
      newStringTwo += (s.charAt(i));
      }
      else {
        newStringTwo += (s.charAt(i).toUpperCase());
        newStringOne += (s.charAt(i));
      }
      
    }
  // concat(newArrOne);
  console.log(newStringOne,newStringTwo);
  
  return [newStringOne,newStringTwo];
};