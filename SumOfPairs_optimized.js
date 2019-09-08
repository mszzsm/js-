//my solution  (to slow )
var sum_pairs=function(ints, s){
   
  let result = []
  
  ints.map((x,i) => x + ints[i+1] == s ? result.push( x, ints[i+1]) : null ) 

  const SecondNode = (it, index, arr) => { 

       for (let i = 0; i < arr.length; i++) {
        if(result.length > 0){break} else {
        let item = it
        let item2 = arr[i+1]
        if(item + item2 == s ){ result = [item, item2]}
        }
       }
        return;
     }
   debugger
   result.length > 0 ? null : ints.forEach(SecondNode) 

   return result.length == 0 ? undefined :  result
   
}

//best solution

function sum_pairs(integers, sum) {
  debugger
  var seenNumbers = {};
  for (var i = 0; i < integers.length; i++) {
    if (seenNumbers.hasOwnProperty(sum - integers[i])) {
      return [sum - integers[i], integers[i]];
    } else {
      seenNumbers[integers[i]] = true;
    }
  }
  return undefined;
}

sum_pairs([1,4,8,7,3,15], 8)