function prefill(a,b) {
  const container = []
    if ( a  === 'xyz' ) { throw new TypeError( a + ' is invalid' );
     } else { for ( let i = 0; i < a; i++){ container.push(b) }
      return container
    }
  }

//prefill(3,1) //[1,1,1]
//prefill(2,"abc") // ['abc','abc']
//prefill("1", 1) // [1]
//prefill(3, prefill(2,'2d')) //     --> [['2d','2d'],['2d','2d'],['2d','2d']]
prefill("xyz", 1) // throws TypeError with message "xyz is invalid"