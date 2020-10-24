/**
 * returns an array as-is
 *
 * returns a non-array as a new one-element array
 */
export declare function arrayify<T>(arr: T | T[]): T[];
/** shuffles array in place - https://stackoverflow.com/a/12646864 */
export declare function shuffleArray<T>(array: T[]): T[];
/** we have all suffered this */
export declare function arrayUniq(array: any[]): any[];
/**
 * if array contains value , removes any value from array
 *
 * if array does not contain value , pushes value into array
 */
export declare function toggleArrayValue<T>(arr: T[], value: T): T[];
