/** 
 * new 연산자로 Promise 객체 생성
 * const promise = new Promise(콜백함수)
 * 콜백함수: (resolve, reject) => {}
 * 
 * const numPromise: Promise<number> = new Promise<number>(콜백함수)
 * const arrayPromise: Promise<number[]> = new Promise<number[]>(콜백함수)
 * 
 * 콜백함수 형태
 * new Promise<T>((
 *    resolve: (successValue: T) => void,
 *    reject: (any) => void
 * ) => {코드구현})
 */


import { readFile } from "fs"

export const readFilePromise = (filename: string): Promise<string> =>
    new Promise<string>((
        resolve: (value: string) => void,
        reject: (error: Error) => void) => {
            readFile(filename, (err: Error, buffer: Buffer) => {
                if(err) reject(err)
                else resolve(buffer.toString())
            })
        }
    )