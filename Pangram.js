//my solution
function isPangram(string){
   let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newString = string.toLowerCase().replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, '')
    let Include = []
    for ( let i = 0; i < newString.length; i++ ){
        for ( let j = 0; j <= alphabet.length; j++ ){
           newString[i] == alphabet[j] ? Include.push(newString[i]) :  0
        }
    }
    return [...new Set(Include)].sort().join().replace(/,/g,'') === alphabet
}

isPangram("How quickly daft jumping zebras vex.")

//best solutions

function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){ // used function every
    return string.indexOf(x) !== -1;
  });
}

isPangram("How quickly daft jumping zebras vex.")