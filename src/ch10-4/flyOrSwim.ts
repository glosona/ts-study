import { Bird, Fish } from "./BirdAndFish"

export const flyOrSwim = (o: Bird | Fish): void => {
    if(o instanceof Bird) {
        // (o as Bird).fly()
        o.fly()
    } else if (o instanceof Fish) {
        // (<Fish>o).swim()
        o.swim()
    }
}

[new Bird, new Fish].forEach(flyOrSwim)