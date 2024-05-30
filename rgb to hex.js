// DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(...args) {
    let result = ''
    for (let r of args) {
        let numarr = []
        let num = parseInt((r / 16).toString().slice(0, 2))
        let rem = parseFloat('0.' + (r / 16).toString().split('.')[1]) * 16
        numarr.push(num, rem)
        let colorletter = ['A', 'B', 'C', 'D', 'E', 'F']
        let colorobj = {}
        for (let i = 10; i <= 15; i++) {
            colorobj[colorletter[i - 10]] = i
        }
        for (let num of numarr) {
            for (let code in colorobj) {
                if (num % parseInt(colorobj[code]) === 0 && num > 0) {
                    num = '' + (num / parseInt(colorobj[code]) > 1 ? num / parseInt(colorobj[code]) : '') + code
                } else if (r <= 0) {
                    num = '0'
                } else if (r > 255) num = 'F'
            }
            result += num

        }

    }
    return result

}