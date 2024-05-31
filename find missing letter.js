// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!
function findMissingLetter(array) {
    let res = array.reduce((acc, curr) => acc + curr.toLowerCase(), '')
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let arr = alpha.slice((alpha.indexOf(array[0].toLowerCase())), (alpha.indexOf(array[0].toLowerCase())) + array.length)
    for (letter of arr) {
        if (!res.includes(letter)) {
            return (array[0] === array[0].toUpperCase()) ? letter.toUpperCase() : letter
        }
    }
}