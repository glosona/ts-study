export const mergeArray = <T>(...arr: readonly T[][]): T[] => {
    let result: T[] = []
    for(let content of arr) {
        result = [...result, ...content]
    }
    return result
}