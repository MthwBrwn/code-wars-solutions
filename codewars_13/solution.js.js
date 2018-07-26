function mutateMyStrings(stringOne, stringTwo){
  const arrayOne = stringOne.split('');
  const arrayTwo = stringTwo.split('');
  const keeperArray = [];
  keeperArray.push(stringOne);
  for (let i=0 ; i<arrayOne.length;i++){
//   check if digits match 
    if (arrayOne[i] != arrayTwo[i]){ 
      arrayOne.splice(i,1,arrayTwo[i]);
      keeperArray.push(arrayOne.join(''))
      }
  }
console.log(keeperArray); 
return (keeperArray.join('\n')+'\n');

}