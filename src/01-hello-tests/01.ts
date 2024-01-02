export const value01_01 = '01_01'

//===============================================================================================================================================================


export const sum = (a: number, b: number) => {
    return a + b
}

export const mult = (a: number, b: number) => {
    return a * b
}


export const splitIntoWords = (sentence: string) => {
    return sentence.split(' ').map(item => item.split('').filter(item => (/\w/g).test(item)).join(''))
}



