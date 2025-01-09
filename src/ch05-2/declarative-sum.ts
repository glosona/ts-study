import { fold } from "./utils/fold"
import { range } from "./utils/range"

let numbers: number[] = range(1, 100+1)
// console.log(numbers)
// const callback = (result: number, value: number): number => {
//     return result + value
// }
// let result: number = fold(numbers, callback, 0)
let result = fold(numbers, (result, value) => result + value, 0)
console.log(result)