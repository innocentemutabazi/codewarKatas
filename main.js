function digitalRoot(n) {
    let numarray=n.toString().split('')
    let sum = 0
    for (num of numarray){
      sum += parseInt(num)
    }
    let answer= sum.toString()
    while(answer.length>1){
      let answerarr = answer.split('')
      let num = 0
      for (let dig of answerarr){
        num += parseInt(dig)
      }
      sum = num
    }
    return sum
  }

console.log(digitalRoot(456))