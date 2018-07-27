function capitalize(s,arr){
  let sArray = s.split('');
  let capArray = [];   
  for (let i = 0; i < sArray.length; i++){
    if (arr.includes(i)){
      capArray.push(sArray[i].toUpperCase());
      
      console.log('capped',sArray[i]);
    } else {capArray.push(sArray[i])
    
    }
  } 
  return (capArray).join('');
};