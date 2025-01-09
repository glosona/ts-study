type AddOneFunc = (number) => number

const addOne = (a: number): AddOneFunc => {
    const _add: AddOneFunc = (b: number): number => {
        return a + b + 1
    }
    return _add
}

console.log(addOne(5)(3))
// const addOneAnswer = (a: number): ((b: number) => number) => {
//     return (b: number) => a + b + 1;
// }

// const addFive = addOneAnswer(5)
// console.log(addFive(3))

const applyToEach = (f: (n: number) => number, arr: number[]): number[] => {
    return arr.map(f)
}

const addTwo = (n: number) => n + 2
