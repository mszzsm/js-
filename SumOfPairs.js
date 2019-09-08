var sum_pairs=function(ints, s){
   
   let result = []
    debugger
   for(let i = 0; i < ints.length; i++){
      
      if(result.length > 0) {break}
      for(let j = i+1; j < ints.length; j++){
        
        if(ints[i] + ints[j] == s ) { result = [ints[i], ints[j]]; break }
       
      }      
   }

   return result
   
}

sum_pairs([10,5,2,3,7,5], 10)