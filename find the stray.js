// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3
function stray(numbers) {
    let resobj = {}
    for (let num of numbers) {
        if (!resobj[num]) {
            resobj[num] = 0
        } resobj[num]++

    }
    for (let key in resobj) {
        if (resobj[key] == 1) {
            return key
        }
    }
}
// A bit of refractoring
function stray(numbers){
    numbers.sort((a,b)=>a-b)
    if (numbers[0] !== numbers[1]) return numbers[0]
    return numbers[numbers.le]
}
console.log(stray([1, 1, 2]))