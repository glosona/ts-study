import { readFile } from "fs"

readFile('../../package.json', (err: Error, buffer: Buffer) => {
    if(err) throw err
    else {
        const content: string = buffer.toString()
        console.log(content)
    }
})

// 비동기 동작은 멈추지 않고 이후 코드 실행
// readFile() 함수의 두 번째 매개변수인 콜백함수로 결과 전달