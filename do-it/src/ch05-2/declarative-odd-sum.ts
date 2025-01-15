// import { fold } from "./utils/fold"
// import { range } from "./utils/range"

// let numbers: number[] = range(1, 100+1)
// let result = fold(numbers, (result, value) => value % 2 != 0 ? result + value : result, 0)
// console.log(result)

import { filter } from "./utils/filter"
import { range } from "./utils/range"
import { fold } from "./utils/fold"

// let numbers: number[] = range(1, 100 + 1)
// let oddNumbers = filter(numbers, (value) => value % 2 != 0)
// let result = fold(oddNumbers, (result, value) => result + value, 0)
// console.log(result)

let numbers: number[] = range(1, 100 + 1)
const isOdd = (n: number): boolean => n % 2 != 0
let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0)
console.log(result)