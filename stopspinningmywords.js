function spinWords(strings){
    let strarray=strings.split(' ')
    for (let word of strarray){
        if (word.length >= 5){
            word = word.split('').reverse().join``
        }return word
    }
}
console.log(spinWords('Welcome'))