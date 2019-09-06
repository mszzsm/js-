//my solution

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

// best solution

var find = /[a-z]{4,}/gi;
function replace(match) { return match[0] + (match.length - 2) + match[match.length - 1]; }

function abbreviate(string) {
    return string.replace(find, replace);
}
//__
function abbreviate(string) {
    return string.replace(/\w{4,}/g, function (word) {
        return word[0] + (word.length - 2) + word.slice(-1);
    });
}