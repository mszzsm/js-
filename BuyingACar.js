//my solution
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    
    let reason = startPriceNew - startPriceOld
    let priceOld = startPriceOld
    let priceNew = startPriceNew
    let percent = percentLossByMonth
    let leftover = [0, 0] 
    
    debugger
    if (reason / savingperMonth  <= 0 ) { leftover = [0, -reason]} else { // перевірка чи машина дорожща за стару }
    
    isEven = (x) => { x % 2 == 0 ? percent = percent + 0.5 : null}
    for ( let i = 0; priceNew > (leftover[1] + priceOld); i++ ) {
       
        priceOld = priceOld * (1 - (percent/100))
        priceNew = priceNew * (1 - (percent/100))
        leftover[1] = leftover[1] + savingperMonth
        leftover[0] += 1 
        isEven(i)
       }
    leftover[1] += priceOld
    debugger
    leftover[1] = Math.round(leftover[1] - priceNew)
    return leftover
    }
   return leftover
}

// best solutions


function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var months = 0, moneySaved = 0;
  while (startPriceNew > startPriceOld + moneySaved){
    moneySaved += savingperMonth;
    startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
    startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
    months++;
    if (months % 2 == 1){
      percentLossByMonth += .5;
    }
  }
  return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}



//nbMonths(2000, 8000, 1000, 1.5)    //  [6, 766]
nbMonths(12000, 8000, 1000, 1.5) // [0, 4000]
//nbMonths(2800 ,4300 ,1000 ,1.4) // [2, 549]
//nbMonths(7500, 32000, 300, 1.55);

// Testing for nbMonths(1400 ,4100 ,1000 ,1.3)
//  Testing for nbMonths(2800 ,3700 ,1000 ,1.1)
//  Testing for nbMonths(2000 ,4000 ,1000 ,1.5)
//  Testing for nbMonths(2300 ,3200 ,1000 ,1.5)
//  Testing for nbMonths(1900 ,4100 ,1000 ,1)
//  Testing for nbMonths(2200 ,3400 ,1000 ,1.5)
//  Testing for nbMonths(2100 ,2600 ,1000 ,1.5)
//  Testing for nbMonths(2400 ,4600 ,1000 ,1.2)
//  Testing for nbMonths(1900 ,4700 ,1000 ,1)
//  Testing for nbMonths(2200 ,4700 ,1000 ,1)
//  Testing for nbMonths(2500 ,5000 ,1000 ,1.1)
//  Testing for nbMonths(2600 ,4900 ,1000 ,1.2)
//  Testing for nbMonths(1700 ,3000 ,1000 ,1.1)
//  Testing for nbMonths(1200 ,3900 ,1000 ,1.4)
//  Testing for nbMonths(2600 ,4800 ,1000 ,1.3)
//  Testing for nbMonths(1800 ,2500 ,1000 ,1.4)
//  Testing for nbMonths(2400 ,3900 ,1000 ,1.3)
//  Testing for nbMonths(1100 ,2600 ,1000 ,1.4)
//  Testing for nbMonths(1200 ,4000 ,1000 ,1.3)
//  Testing for nbMonths(2000 ,3200 ,1000 ,1.5)
//  Testing for nbMonths(2500 ,3700 ,1000 ,1.3)
//  Testing for nbMonths(2500 ,3700 ,1000 ,1.1)
//  Testing for nbMonths(2600 ,4900 ,1000 ,1)
//  Testing for nbMonths(1300 ,4400 ,1000 ,1.5)
//  Testing for nbMonths(3000 ,3300 ,1000 ,1.3)
//  Testing for nbMonths(2600 ,4000 ,1000 ,1.2)
//  Testing for nbMonths(3000 ,4800 ,1000 ,1.2)
//  Testing for nbMonths(2700 ,4000 ,1000 ,1.4)
//  Testing for nbMonths(2300 ,3900 ,1000 ,1.5)
//  Testing for nbMonths(1100 ,3100 ,1000 ,1.4)
//  Testing for nbMonths(3000 ,3900 ,1000 ,1.4)
//  Testing for nbMonths(2300 ,3100 ,1000 ,1.1)
//  Testing for nbMonths(2300 ,3900 ,1000 ,1.3)
//  Testing for nbMonths(2400 ,3200 ,1000 ,1.3)
//  Testing for nbMonths(1800 ,4900 ,1000 ,1.4)
//  Testing for nbMonths(2700 ,3300 ,1000 ,1.4)
//  Testing for nbMonths(1100 ,3600 ,1000 ,1.4)
//  Testing for nbMonths(1700 ,3400 ,1000 ,1.3)
//  Testing for nbMonths(2100 ,3200 ,1000 ,1.4)
//  Testing for nbMonths(2600 ,4900 ,1000 ,1.1)

