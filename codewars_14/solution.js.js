function capitalize(s,arr){
  console.log(s);
  console.log(arr);
    let sArray = s.split('');
    let capArray = [];
      for (let j=0 ; j< arr.length; j++){
      
        for (let i = 0; i < sArray.length; i++){
          if (i===arr[j]){
            capArray.push(sArray[i].toUpperCase());
            j++
  //           console.log('j',j);
          } else {capArray.push(sArray[i])
          console.log(i);
          }
        }