function Polindrom(string){
    let array = []

    
    for(let i = 0; i < string.length; i++){  
        array.push(string[i])
    }  

    let newArray = array.reverse().join().replace(/,/g,'')
  

  debugger
    return newArray.toLowerCase() == string.toLowerCase()
} 

Polindrom("Jooj")