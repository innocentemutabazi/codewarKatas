// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    let resobj = {}
    for (let letter of str.toLowerCase()) {
        if (letter === 'x') {
            if (!resobj[letter]) {
                resobj[letter] = 0
            } resobj[letter]++
        }
        if (letter === 'o') {
            if (!resobj[letter]) {
                resobj[letter] = 0
            } resobj[letter]++


        }
    }
    if (resobj['x']===resobj['o']){
        return true
    }else return false
}