
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
    const arr = s.split(' ');
    const lengthobj = {}
    const lengtharr = []
    for (const arry of arr) {
        lengthobj[arry] = arry.length
    }

    for (key in lengthobj){
    lengtharr.push(parseInt(lengthobj[key]))
    }
    return Math.min(...lengtharr)
}