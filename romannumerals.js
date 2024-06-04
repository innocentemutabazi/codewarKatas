function solution(number) {
    let numarray = number.toString().split('').reverse()
    for (let i = 0; i < numarray.length; i++) {
        numarray[i] += '0'.repeat(i)
    }
    let romanobj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
}
console.log(solution(1527))