function accum(s) {  //test
    debugger

    let newarray = [] // []

    let q = s.toLowerCase()
				.split('')
					.map((x, index) => `${x.toUpperCase}${Array(index+1).join(x)}`) // ["t", "ee", "sss", "tttt"]

   

	return q.join('-')
}

 accum("test")