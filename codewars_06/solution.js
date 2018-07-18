function isNice(arr){

  let trueCount = 0;
  if (arr.length < 2) {
    return false;
  }
  console.log('beginning arr: ', arr);
  for(let i=0; i < arr.length; i++) {
   if(arr.includes(arr[i]+1)||arr.includes(arr[i]-1)){
     trueCount++;
   }
  }
   
  if (trueCount === arr.length){
     return true
  }else{
     return false
  }

}