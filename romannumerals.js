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
    for (let numb of numarray.reverse()) {
        if (numb.length === 4) {
            numarray[numarray.indexOf(numb)] = 'M'.repeat(Math.floor(parseInt(numb) / romanobj['M']))
        }
        if (numb.length === 3) {
            if (parseInt(numb) < 400) {
                numarray[numarray.indexOf(numb)] = 'C '.repeat(Math.floor(parseInt(numb) / romanobj['C']))

            }
            if (parseInt(numb) === 400) {
                numarray[numarray.indexOf(numb)] = 'CD'
            }
            if (parseInt(numb) === 500) {
                numarray[numarray.indexOf(numb)] = 'D'

            }
            if (parseInt(numb) > 500 && parseInt(numb) !== 900) {
                numarray[numarray.indexOf(numb)] = 'D' + 'C'.repeat((parseInt(numb) - 500) / 100)

            }
            if (parseInt(numb) === 900) {
                numarray[numarray.indexOf(numb)] = 'CM'
            }
        }

        if (numb.length === 3) {
            if (parseInt(numb) < 400) {
                numarray[numarray.indexOf(numb)] = 'C'.repeat(Math.floor(parseInt(numb) / romanobj['C']))

            }
            if (parseInt(numb) === 400) {
                numarray[numarray.indexOf(numb)] = 'CD'
            }
            if (parseInt(numb) === 500) {
                numarray[numarray.indexOf(numb)] = 'D'

            }
            if (parseInt(numb) > 500 && parseInt(numb) !== 900) {
                numarray[numarray.indexOf(numb)] = 'D' + 'C'.repeat((parseInt(numb) - 500) / 100)

            }
        
        }
        if (numb.length === 2) {
            if (parseInt(numb) < 40) {
                numarray[numarray.indexOf(numb)] = 'X'.repeat(Math.floor(parseInt(numb) / romanobj['X']))

            }
            if (parseInt(numb) === 40) {
                numarray[numarray.indexOf(numb)] = 'XL'
            }
            if (parseInt(numb) === 50) {
                numarray[numarray.indexOf(numb)] = 'L'

            }
            if (parseInt(numb) > 50 && parseInt(numb) !== 90) {
                numarray[numarray.indexOf(numb)] = 'L' + 'X'.repeat((parseInt(numb) - 50) / 10)

            }
            if (parseInt(numb) === 90) {
                numarray[numarray.indexOf(numb)] = 'XC'
            }
        }
        if (numb.length === 1) {
            if (parseInt(numb) < 4) {
                numarray[numarray.indexOf(numb)] = 'I'.repeat(Math.floor(parseInt(numb) / romanobj['I']))

            }
            if (parseInt(numb) === 4) {
                numarray[numarray.indexOf(numb)] = 'IV'
            }
            if (parseInt(numb) === 5) {
                numarray[numarray.indexOf(numb)] = 'V'

            }
            if (parseInt(numb) > 5 && parseInt(numb) !== 9) {
                numarray[numarray.indexOf(numb)] = 'V' + 'I'.repeat(parseInt(numb) - 5)

            }
            if (parseInt(numb) === 9) {
                numarray[numarray.indexOf(numb)] = 'IX'
            }
        }
    }
    console.log(numarray)
    return numarray.join('').trim()
}
console.log(solution(11))