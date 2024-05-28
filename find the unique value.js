// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

function findUniq(arr) {
    let resobj={}
  for (let num of arr) {
    if (!resobj[num]) resobj[num] =0
    resobj[num] ++
  }
  for (let key in resobj){
    if (resobj[key]===1){
        return key
    }
  }
  }
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))