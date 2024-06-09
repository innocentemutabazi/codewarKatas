// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message){
    let arr = message.toLowerCase().split('')
    let alpha='abcdefghijklmnopqrstuvwxyz'
    for (let i=0;i<arr.length;i++){
      if(!alpha.includes(arr[i])) continue
      arr[i] = alpha[alpha.indexOf(arr[i])+13 <alpha.length ? alpha.indexOf(arr[i])+13 : alpha.indexOf(arr[i])-13]
          if(message[i]===message[i].toUpperCase()) arr[i] = arr[i].toUpperCase()
    }
    return arr.join('')
  }