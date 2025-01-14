import { readFile } from "fs"

readFile('../../package.json', (err: Error, buffer: Buffer) => {
    if(err) throw err
    else {
        const content: string = buffer.toString()
        console.log(content)

        readFile('../../tsconfig.json', (err: Error, buffer: Buffer) => {
            if(err) throw err
            else {
                const content: string = buffer.toString()
                console.log(content)
            }
        })
    }
})

// callback hell(콜백 지옥): 복잡한 형태로 얽힌 콜백 구조
// Promise는 이런 콜백 지옥에 빠진 코드를 좀 더 다루기 쉬운 형태의 코드로 만들려는 목적