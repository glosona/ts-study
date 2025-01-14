// race(프로미스 객체 배열: Promise[]): Promise<가장 먼저 해소된 객체의 값 타입(혹은 error)>

Promise.race([Promise.resolve(true), Promise.resolve('hello')])
    .then(value => console.log(value)) 
    
Promise.race([Promise.resolve(true), Promise.reject(new Error('hello'))])
    .then(value => console.log(value)) 
    .catch(error => console.log(error.message))

Promise.race([Promise.reject(new Error('error')) ,Promise.resolve(true)])
    .then(value => console.log(value)) 
    .catch(error => console.log(error.message))

// 먼저 resolve, reject되는지 순서에 따라 then, catch가 실행된다.