const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/math')

test('Should caluclate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
    // if (total != 13) {
    //     throw new Error('Total tip should be 13. Got ' + total)
    // }
})  

test('Should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 C', () => {
    const fTOc = fahrenheitToCelsius(32)
    expect(fTOc).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
    const cTOf = celsiusToFahrenheit(0)
    expect(cTOf).toBe(32)
})

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(2)
//         done()
//     }, 2000)
// })

// test('should be two numbers', (done) => {
//     add(3, 2).then((sum) => {
//         expect(sum).toBe(5)
//         done()
//     })
// })

test('should be two numbers async/await', async () => {
    const sum = await add(5, 3)
    expect(sum).toBe(8)
})