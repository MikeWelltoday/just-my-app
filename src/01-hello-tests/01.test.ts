import {mult, splitIntoWords, sum} from './01'

//===============================================================================================================================================================


test('sum should be correct', () => {

    const a = 1
    const b = 2

    const result = sum(a, b)

    expect(result).toBe(3)
})

test('multiply should be correct', () => {

    const a = 1
    const b = 2

    const result = mult(a, b)

    expect(result).toBe(2)

})

test('splitIntoWords should be correct', () => {

    const str = `Hello my dear friend!`

    const result = splitIntoWords(str)

    expect(result.length).toBe(4)

    expect(result[0]).toBe('Hello')
    expect(result[1]).toBe('my')
    expect(result[2]).toBe('dear')
    expect(result[3]).toBe('friend')


})



