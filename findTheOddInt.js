//my solution

function findOdd(A) {
    
    let newArray = [] 
        var number = 0;
         while (number < A.length) { 
          newArray.push( A.filter(x => x == A[number]).length);       
          number++;           
        }  
    return A[newArray.map(x => x % 2 == 1).indexOf(true)];
}

findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])


//best solutions

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);


//-----------
function findOdd3(A) {
    var obj = {};
    A.forEach(function (el) {
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for (prop in obj) {
        if (obj[prop] % 2 !== 0) return Number(prop);
    }
}