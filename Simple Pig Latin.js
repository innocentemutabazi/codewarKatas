// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    let strarray = str.split(' ')
    let newarray = []
    for (let str of strarray) {
        let wordarray = str.split('')
        wordarray.push(str[0])
        wordarray.shift()
        let word = wordarray.join`` + `ay`
        if (str === '!' || str === '?') {
            word = str
        }
        newarray.push(word)
    }
    return newarray.join` `
}
console.log(pigIt('Pig latin is cool'))