function FizzBuzz (n) {
    let container = [] 
    for (let i = 1; i <= n ; i++)
     {
        i % 3 == 0 ? container.push("Fizz") :  i % 5 == 0 ? container.push("Buzz") : container.push("FizzBuzz") 
     }   
    return container 
} 

FizzBuzz(5)