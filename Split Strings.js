// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    let strarray = str.split('')
    let newarray = []
    for (let i = 0; i < strarray.length; i++) {
        if (i % 2 === 0) {
            strarray[i] = strarray[i] + (strarray[i + 1] ? strarray[i + 1] : '_')
            newarray.push(strarray[i])
        }
    }
    return newarray
}