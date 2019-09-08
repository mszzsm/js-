// my solution  
function findOutlier(integers){
    let odds = []
    let evens = []
    let result = integers.map(x => x % 2 == 0 ? evens.push(x): odds.push(x))
    return  odds.length < evens.length ?  odds[0] :  evens[0]
}
 //best solutions


function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}

function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 == 0);
}
function odd(num){
  return !even(num)
}


findOutlier([0,0,3,0,0])

