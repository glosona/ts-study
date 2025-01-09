import { range } from "./utils/range"
import { fold } from "./utils/fold"
import { map } from "./utils/map"

let numbers = range(1, 100 + 1)
let result = fold(map(numbers, (value) => value * value), (result, value) => result + value, 0)
console.log(result)
