function comp(array1, array2){
    array1.unshift(array1.pop())
    for(let i=0 ; i<array1.length;i++){
      if (Math.pow(array1[i],2) !== array2[i]) return false  
    }
    return true
}
console.log(comp( [121, 144, 19, 161, 19, 144, 19, 11],[231, 14641, 20736, 361, 25921, 361, 20736, 361]))