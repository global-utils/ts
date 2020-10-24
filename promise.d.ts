/** returns a promise that never resolves */
export declare function neverResolve(): Promise<unknown>;
/** a promise that resolves after some number of milliseconds */
export declare function sleep(ms: number): Promise<unknown>;
/** a promise that resolves at a specific Date or millisecond timestamp*/
export declare function sleepUntil(date: number | Date): Promise<void>;
