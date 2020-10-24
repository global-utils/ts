/**
 * returns an array as-is
 *
 * returns a non-array as a new one-element array
 */
export function arrayify(arr) {
    return Array.isArray(arr) ? arr : [arr];
}
/** shuffles array in place - https://stackoverflow.com/a/12646864 */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
/** we have all suffered this */
export function arrayUniq(array) {
    return [...new Set(array)];
}
/**
 * if array contains value , removes any value from array
 *
 * if array does not contain value , pushes value into array
 */
export function toggleArrayValue(arr, value) {
    return arr.includes(value) ? arr.filter((i) => i !== value) : [...arr, value];
}
