// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    return  str.split('').slice((str.split('').length-ending.split('').length)).join`` === ending
}

//A bit of refractoring

solution=(str, ending) => str.endsWith(ending)
