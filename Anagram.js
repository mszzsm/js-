//my solution

function anagramCounter(array){
    let container = []
    let counter = 0

    for ( let i = 0; i < array.length; i++ ){
        container.push(array[i].split('').sort().join('')) 
    }

    for ( let i = 0; i < container.length; i++ ){
          for ( let j = i+1; j < container.length; j++ ){
            container[i] == container[j] ? counter++ : null
        }
    }  

    return counter
}


// best solutions 
function anagramCounter(arrayOfWords) {
    let sortedWords = arrayOfWords.map(word => word.split('').sort().join(''));
    let numberOfAnagrams = 0;

    sortedWords.forEach((word, theIndex) => {
        for (let i = theIndex + 1; i < sortedWords.length; i++) {
            if (word === sortedWords[i]) {
                numberOfAnagrams++
            }
        }
    })
    return numberOfAnagrams
}


anagramCounter = a => (a = a.map(e => e.split('').sort().join(''))).reduce((r, e, i) => (a.forEach((b, j) => r += (i == j ? 0 : e == b ? 1 : 0)), r), 0) / 2;

anagramCounter(['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab'])