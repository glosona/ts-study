// all(프로미스 객체 배열: Promise[]): Promise<해소된 값들의 배열(혹은 any)>

const getAllresolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

getAllresolvedResult<any>([Promise.resolve(true), Promise.resolve('hello')])
    .then(result => console.log(result))

getAllresolvedResult<any>([Promise.reject(new Error('error')), Promise.resolve(1)])
    .then(result => console.log(result))
    .catch(error => console.log('error:', error.message))
