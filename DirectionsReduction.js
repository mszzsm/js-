//my solution
function dirReduc(arr){
     
    let directionY = []
    let directionX = []
    let mainDirection = []
    
    const reduceDir = function(x){
      
    for (let j = 0; j <= x.length; j++) {
          if (  x[j] === "EAST" && x[j+1] === "WEST"    ||
                x[j] === "WEST" && x[j+1] === "EAST"    ||
                x[j] === "SOUTH" && x[j+1] === "NORTH"  ||
                x[j] === "NORTH" && x[j+1] === "SOUTH")
            { x.splice(j,2) 
              j = 0 } 
          else { 0 } 
          debugger
     }
    }
    
    reduceDir(arr)
    arr.map(x => mainDirection.push(x))
    reduceDir(mainDirection)

    return mainDirection
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

//best solutions