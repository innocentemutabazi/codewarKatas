var isAnagram = function(test, original) {
    test=test.toLowerCase()
    original = original.toLowerCase()
    if(test.length !== original.length) return false
    let testobj={}
    let originalobj={}
    for (let char of test){
        if (!testobj[char]) testobj[char]= 0
        testobj[char]++
    }
    for (let char of original){
        if (!originalobj[char]) originalobj[char]= 0
        originalobj[char]++
    }
    for (let key in testobj){
        if (testobj[key] !== originalobj[key]) return false
    }

    for (let char of test){
      if (!original.includes(char)) return false
    }
    
    return true
  };

console.log(isAnagram("foefet","toffee"))