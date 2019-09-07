//My Solution
var countBits = function(n) {
   return (n >>> 0).toString(2).split('').reduce((a,b) => a*1 + b*1) * 1
};

//Best solutions
countBits = n => n.toString(2).split('0').join('').length;

