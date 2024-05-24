// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(s){
    const digits='0123456789'
    let result=''
    let sum=0
    for (let i=0;i<=s.length;i++){
      if (digits.includes(s[i])){
        result+=s[i]
      }else{
        if(result!==''){
          sum = sum + parseInt(result)
          result=''
        }
      }
    }
    return sum
  }