/** convert `'camelString'` to `['camel', 'string']` */
export declare function camelSplit(camelString: string): string[];
/** escape some markdown characters */
export declare function escMarkdown(text: string): string;
/**
 * if count is `true` or Number(count) is above 1, return pluralSuffix.
 * else return singularSuffix
 *
 * ```
 * const announcement = `i own ${dogCount} dog${s(dogCount)}`;
 * // `i own 5 dogs`
 * // `i own 1 dog`
 * ```
 */
export declare function s(count: number | string | boolean, pluralSuffix?: string, singularSuffix?: string): string;
