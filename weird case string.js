function toWeirdCase(string){
    string = string.split(' ')
    let res=''
    for (let char of string){
        let chararr = char.split('')
        for (let i=0;i<chararr.length;i++){
            if (i % 2===0){
                chararr.splice(i,1,chararr[i].toUpperCase())
            }
        }
        char = chararr.join('')
        res += char+' '
    }
    return res.trim('')
}
    
console.log(toWeirdCase('this is a test'))