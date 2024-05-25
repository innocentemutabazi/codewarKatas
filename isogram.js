// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
    let newstr=str.toLowerCase()
  let resobj={}
    for (let char of newstr){
      if (!resobj[char]){
        resobj[char]=0
      }resobj[char]++
    }
  let answer= true
    for (let key in resobj){
      if (resobj[key]!==1){
        answer = false
      }
    }
    return answer
  }