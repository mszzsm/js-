var sum_pairs=function(ints, s){
   let result = []

   ints.map((x,i) => x + ints[i+1] == s ? result.push( x, ints[i+1]) : null ) 
       if (result.length == 0) {
           for (let i = 0; i < ints.length; i++){

              if(result.length > 0) {break}
              for(let j = i+1; j < ints.length; j++){

                if(ints[i] + ints[j] == s ) { result.push(ints[i], ints[j]); }

              }      
           }  
       }
   return result.length == 0 ? undefined :  result
   
}

sum_pairs([10, 5, 2, 3, 7, 5], -7)