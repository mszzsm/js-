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



//best solutions

function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

// clever solution

function dirReduc(arr) {
    debugger
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');                     //used method test 
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])