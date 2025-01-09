import { ResultType } from "../ResultType"

export const doSomething = (): ResultType => {
    try {
        throw new Error('Some erro occurs...')
    } catch(e) {
        return [false, e.message]
    }
}