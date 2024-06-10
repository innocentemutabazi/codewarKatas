function arithmetic(a, b, operator) {
    if (operator === 'add') {
        operator = '+'
    }
    if (operator === 'subtract') {
        operator = '-'
    } if (operator === 'divide') {
        operator = '/'
    } if (operator === 'multiply') {
        operator = '*'
    }
    console.log(operator)
    return eval(`${a} ${operator} ${b}`)
}
console.log(arithmetic(8, 2, "subtract"))