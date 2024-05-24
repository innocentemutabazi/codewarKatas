// Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.

// Calculate the parameter of the given number n.

// Input/Output
// [input] integer n

// A positive integer. It is guaranteed that no zero appears in n.

// [output] an integer

// The parameter of the given number.

// Example
// For n = 22, the output should be 4.

// Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.

// For n = 1234, the output should be 120.

// 1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120

function parameter(n) {
    //coding and coding..
    let narray = n.toString().split('')
    let sum =0
    let product=1
    for (let num of narray){
      sum += parseInt(num)
      product *= parseInt(num)
    }
    function gcd(num1,num2){
      while (num1 !== num2){
        if (num1 > num2){
          num1 = num1-num2
        }else num2 = num2-num1
      }
        return num2
  
    }
    return (sum*product)/gcd(sum,product)
}