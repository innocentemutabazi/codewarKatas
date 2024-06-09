// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = str =>{
    let res=''
    for (let char of str){
        char === char.toUpperCase() ? res += ` ${char}` : res += char
    }
    return res
}
