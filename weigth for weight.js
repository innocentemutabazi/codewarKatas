function orderWeight(strng) {
    strng = strng.split(' ')
    const test = strng.map(value => value.split('').reduce((a,b)=>parseInt(a)+parseInt(b),0))
    let resobj=[]
    let resarr=[]
    for (let i=0;i<strng.length;i++){
        resobj[i] = [strng[i],test[i]]
    }
    let sortedarr =resobj.sort(([c,a],[d,b])=> a !== b ? a-b : c.localeCompare(d))
    for (let arr of sortedarr){
        resarr.push(arr[0])
    }
    return resarr
  }
console.log(orderWeight('230127 145 92785 114 416244 92 102003 156 140650 79 172175 190 180493 127 345439 63 79806 18 243760 34 1'))
console.log('200'.charCodeAt() , '2'.charCodeAt())