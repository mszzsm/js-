// mysolution
function persistence(num) {
   const newArray = [num]
   const pushing = () => {
        let devider = newArray[newArray.length -1].toString().split('').reduce((a,b) => a * b) 
        newArray.push(devider)
       }
   for(let i = 0; i < newArray.length; i++) {
       if (newArray[newArray.length - 1] < 10){ i } else {
             pushing(newArray[i])
       }
   }
   newArray.pop()
   return newArray.length
}

persistence(999)

//best Solutions

function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}

// short one

const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}