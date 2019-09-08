function sockMerchant(n, ar) {
    let array = [...ar]
    let unique = [...new Set(array)]
    let boxToSell = []

    boxToSell = unique.map(x => [...ar].filter(y => y == x )).map(x => x.length % 2 == 0 ? x = x.length/2 : (x = x.length - 1) / 2)
    debugger
    return boxToSell.reduce((a,b) => a + b)
}
sockMerchant(100 , [1,1,3,1,2,1,3,3,3,3])
