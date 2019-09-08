// my solution
function fibonacci(num) {

    if(num < 2) {
        return num
    }

    let arr =[0,1]
    for(let i = 0; i < num-1; i++) {
        arr.push(arr[arr.length-1] + arr[arr.length-2])
    }

    return arr.join(', ')
}

fibonacci(70)

//best solutions 

var fibonacci = (function () {
  var cache = {};
  
  return function(n) {
    
    // Base case
    if(n==0 || n == 1)
        return n;
    
    // Recurse only if necessary
    if(cache[n-2] === undefined)
      cache[n-2] = fibonacci(n-2);
    if(cache[n-1] === undefined)
      cache[n-1] = fibonacci(n-1);
    
    return cache[n-1] + cache[n-2];
  };
})();