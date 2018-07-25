function cubeOdd(arr) {
  // let cubedArray =[];
  // let filtArray =[];
    if (arr === []) return undefined;
    if (!arr.every(x => (typeof(x) === 'number'))) return undefined;
    if (arr.length <1) return undefined;
  let cubedArray = arr.map(x => Math.pow(x,3));
  let filtArray = cubedArray.filter((element)=>(element)%2 );
  if (arr.length>0)
   return filtArray.reduce((accumulator, currentValue) =>  accumulator + currentValue);
  // console.log(cubedArray);
  // console.log(filtArray);
  // console.log(reducedInt);
  
  }