// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
function moveZeros(arr) {
    let zero=[]
    let nonzero=[]
    for (let char of arr){
      if (char ===0){
        zero.push(char)
      }else nonzero.push(char)
    }
    return [...nonzero,...zero]
  }