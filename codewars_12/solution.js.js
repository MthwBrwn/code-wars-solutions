function high(x){
  let splitIntoWords = [];
  //scoreCollect should look like a collection of number scores for each word in string
  let scoreCollect = [];
  let indivX=[];
  let maxIndex = 0;
  let maxNum =0
  let greatestWordIndex = 0;
  //tests for empty string condition
  if (/^\s+$/.test(x))  return '';
  splitIntoWords = x.split(' ');
  // if (splitIntoWords.length === 0) { return 0};
  console.log('number of words ', splitIntoWords.length);
    for (let i=0; i<splitIntoWords.length; i++){
      indivX = splitIntoWords[i].split('')
      // console.log(indivX);
      let numX = indivX.map(char => char.charCodeAt(0)-96);
      // console.log(numX);
      scoreCollect.push(numX.reduce((accum,current) => accum + current));
    }
  console.log(scoreCollect);
    for (let j=0;j<scoreCollect.length; j++){
      if (maxNum < scoreCollect[j]){
        maxNum=scoreCollect[j];
        maxIndex=j;
  //       console.log('max index',maxIndex);
      }
    }
    return splitIntoWords[maxIndex];
  }
  