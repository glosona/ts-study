import * as R from 'ramda'

console.log(R.range(1, 9 + 1))

// tap(콜백함수)(배열): 현재 값을 파악하게
const numbers: number[] = R.range(1, 9 + 1)
R.tap(n => console.log(n))(numbers)

// compose(), pipe()
const array: number[] = R.range(1, 10)
R.pipe(R.tap(n => console.log(n)))(array)

// 포인트가 없는 함수 형태
export const dump = R.pipe(R.tap(n => console.log(n)))
dump(R.range(1, 10))

// 포인트가 없는 함수를 화살표 함수로 구현 시 에러 발생
// export const dump2 = <T>(array: T[]): T[] => R.pipe(
//     R.tap(n => console.log(n))
// )(array)
// 반환 타입을 any가 아닌 T[]로 변경해서 해결
export const dump2 = <T>(array: T[]): T[] => R.pipe(
    R.tap(n => console.log(n))
)(array) as T[]

// 자동 커리(auto curry)
console.log(R.add(1, 2), R.add(1)(2))

// 가변인수 함수는 없다
// N차 고차로 만들고 싶다면 curryN사용
export const sum = (...numbers: number[]): number => numbers.reduce((result: number, sum: number) => result + sum, 0)
export const curriedSum = R.curryN(4, sum)
console.log(curriedSum(), curriedSum(1), curriedSum(1)(2), curriedSum(1)(2)(3), curriedSum(1)(2)(3)(4))

// 람다 함수는 순수 함수 형태로 동작
const originalArray: number[] = [1, 2, 3]
const resultArray = R.pipe(R.map(R.add(1)))(originalArray)
console.log(originalArray, resultArray)

// 선언형 프로그래밍
const value = 1
const newValue = R.inc(value) // 2
const newArray = R.pipe(R.map(R.inc))([value]) // [2]

const numbers1: number[] = R.range(1, 9 + 1)
const incNumbers = R.pipe(
    R.tap(a => console.log('before inc:', a)),
    R.map(R.inc),
    R.tap(a => console.log('after inc', a))
)

const newNumbers = incNumbers(numbers)

// R.map은 index 제공 x. 따라서 R.addIndex 사용
const addIndex = R.pipe(
    R.addIndex(R.map)(R.add),
    R.tap(a => console.log(a))
)

const newNumbers1 = addIndex(R.range(1, 9 + 1))

