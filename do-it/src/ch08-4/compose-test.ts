import {f, g, h} from './f-g-h'
import { compose } from './compose'

const composedFGH = compose(h, g, f)
console.log(composedFGH('x'))

const inc = x => x + 1
const composed = compose(inc, inc, inc)
console.log(composed(1))