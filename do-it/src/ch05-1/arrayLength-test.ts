import { arrayLength, isEmpty } from "./utils/arrayLength";

let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['Hello', 'World']

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}]

console.log(
    arrayLength(numArray),
    arrayLength(strArray),
    arrayLength(personArray),
    isEmpty([]),
    isEmpty([1])
)