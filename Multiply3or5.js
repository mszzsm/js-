//My solution
function solution(number){
  if (number) {
  const container = []
 
    for (let i = 0; i < number ; i++){ 
        i % 3 === 0 ? container.push(i) : i % 5 === 0 ? container.push(i) : i
        }
  return container.reduce((a,b) => a + b) 
  } 
    else 
  {
    return 0
  }
}

solution()

//best practice
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}