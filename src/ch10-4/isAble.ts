import { Bird, Fish } from "./BirdAndFish"

// 사용자 정의 타입 가드 함수:: 변수 is 타입
export const isFlyable = (o: Bird | Fish): o is Bird => {
    return o instanceof Bird
}

export const isSwimmable = (o: Bird | Fish): o is Fish => {
    return o instanceof Fish
}

export const siwmOrFly = (o: Fish | Bird) => {
    if(isSwimmable(o)) o.swim()
    if(isFlyable(o)) o.fly()
}

[new Bird, new Fish].forEach(siwmOrFly)