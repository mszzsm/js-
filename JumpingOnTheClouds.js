function jumpingOnClouds(c) {

    var indexes = [], j = -1;
    while ((j = c.indexOf(1, j+1)) != -1){ indexes.push(j); }
    var steps = 0
    
    debugger
    let i = 0

     do {
            indexes.map(x => x == c[i+2] ? i = i + 2 : i++)
            steps++
        }       
        while ( i < c.length && i + 2 < c.length );

    return steps;   
}

//jumpingOnClouds([0,0,1,0,0,0,0,1,0,0])
jumpingOnClouds([0,0,0,1,0,0])
