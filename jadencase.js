String.prototype.toJadenCase = function () {
    let res=''
    for (let word of this.split(' ')){
      let wordarray= word.split('')
      wordarray[0] = wordarray[0].toUpperCase()
      word = wordarray.join('')
      res += (word + ' ')
    }
  let resarray=res.split('')
    resarray.pop()
    return resarray.join('')
  };

