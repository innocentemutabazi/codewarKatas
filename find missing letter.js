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