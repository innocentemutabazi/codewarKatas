// DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
function scramble(str1, str2) {
    let str1obj = {}
    let str2obj = {}
    for (let char of str2) {
        if (!str2obj[char]) str2obj[char] = 0
        str2obj[char]++
    }
    for (let char of str1) {
        if (!str1obj[char]) str1obj[char] = 0
        str1obj[char]++
    }

    for (let key in str2obj) {
        if (str2obj[key] !== str1obj[key]) return false
    }
    for (let char of str2) {
        if (!str1.includes(char)) return false
    }
    return true
}
