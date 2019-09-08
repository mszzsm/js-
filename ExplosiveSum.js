// Test.assertEquals(sum(10), 42);
function sum(num) {
  
  const container = []
  const subarray = []
  let j = 1
  

  let getArray = (x, numberToPush) => {  
    if (x % numberToPush <= 1 ){
        let subArray = []
          for (let j = 0; j < x/numberToPush; j++) { 
            debugger
           subArray.push(numberToPush) 

          }
        container.push(subArray) 
    } 
      
    
    else 

    {
       container.push('...') 
    }

    return container
  }
 

  while (j < num /2){
    getArray(num,j)
    j++
  } 
 

  return container;
}

sum(12);
// Test.assertEquals(sum(2), 2);
// Test.assertEquals(sum(3), 3);
// Test.assertEquals(sum(4), 5);
// Test.assertEquals(sum(5), 7);
// Test.assertEquals(sum(10), 42);