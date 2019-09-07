// my solution 
function isValidWalk(walk) {
   if (walk.length != 10 ){ return false } else { 

  let x = 0
  let y = 0

  for (let i = 0; i < walk.length; i++) {
    walk[i] === 's' ? x++ : walk[i] === 'n' ? x-- : walk[i] === 'e' ? y++ : walk[i] === 'w' ? y-- : null  
    debugger
  } 
  return x == 0 && x == 0 ? true :  false 
  }
}


//isValidWalk(['n','n','n','s','n','s','n','s','n','s'])
isValidWalk(['n','s','n','s','n','s','n','s','n','s'])

//the best solution 

function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }

  return dt === 10 && dx === 0 && dy === 0
}