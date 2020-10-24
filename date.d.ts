export declare type DateConstructorParam = number | string | Date;
export declare function secondsSince(date: DateConstructorParam): number;
export declare function msSince(date: DateConstructorParam): number;
export declare function timeSince(date: DateConstructorParam): string;
/**
 * returns a string like "10h 53m ago".
 * returns just a date string if it's more than breakPoint days ago
 */
export declare function recencyString(date: DateConstructorParam, breakPoint?: number): string;
/**
 * returns a time amount with `d` `h` `m` and `s` units
 */
export declare function dhms(seconds: number): string;
/**
 * returns a time amount with `d` `h` and `m` units
 */
export declare function dhm(seconds: number): string;
