
/** returns a promise that never resolves */
export function neverResolve() {
  return new Promise(() => {});
}

/** a promise that resolves after some number of milliseconds */
export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** a promise that resolves at a specific Date or millisecond timestamp*/
export async function sleepUntil(date: number | Date) {
	if (typeof date === "number") date = new Date(date);
	const now = Date.now();
	const waitTime = date.getTime() - now;
	if (waitTime < 1) throw new Error(`requested: ${date.getTime()}
now: ${now}
${date.toLocaleString()} is not in the future`);
	await sleep(waitTime);
}