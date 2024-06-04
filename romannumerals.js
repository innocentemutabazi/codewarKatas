function solution(number) {
    let numarray = number.toString().split('').reverse()
    for (let i = 0; i < numarray.length; i++) {
        numarray[i] += '0'.repeat(i)
    }
    console.log(numarray)
    let romanobj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    for (let numb of numarray){
        if (numb.length === 4){
            numarray[numarray.indexOf(numb)] = 'M'.repeat( Math.floor(parseInt(numb)/romanobj['M']))
        }
        if (numb.length === 3){
            if (parseInt(numb)<400){
                numarray[numarray.indexOf(numb)] = 'C '.repeat( Math.floor(parseInt(numb)/romanobj['C']))
 
            }
            if (parseInt(numb)===4){
                
            }
        }
    }
    console.log(numarray)
}
console.log(solution(3999))