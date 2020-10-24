/** convert `'camelString'` to `['camel', 'string']` */
export function camelSplit(camelString: string) {
  return camelString.split(/([A-Z][a-z]*)/).filter(Boolean).map(s=>s.toLowerCase())
}

/** escape some markdown characters */
export function escMarkdown(text: string) {
  return text.replace(/\\(\*|_|`|~|\\)/g, "$1").replace(/(\*|_|`|~|\\)/g, "\\$1");
}

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
export function s(
  count: number | string | boolean,
  pluralSuffix = "s",
  singularSuffix = ""
) {
  return (typeof count === "boolean" ? count : Number(count) > 1)
    ? pluralSuffix
    : singularSuffix;
}
