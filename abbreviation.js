function abbreviate(string) {
    
       return  string.split(',').map(x => x.trim())
                                .map(x => x.split(' ')
                                .map(y => y.split('-'))
                                .map(x => x.map((y, i) =>  (y.length > 3) ? y[0] + (y.length-2) + y[y.length-1] : y )
                                .join('-'))
                                .join(' '))
                                .join(', ') 

}

abbreviate('You need, need not want, to complete this code-wars mission')