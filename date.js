export function secondsSince(date) {
    return Math.floor(msSince(date) / 1000);
}
export function msSince(date) {
    return Date.now() - new Date(date).getTime();
}
export function timeSince(date) {
    return dhm(secondsSince(date));
}
const SECONDS_PER_DAY = 86400;
/**
 * returns a string like "10h 53m ago".
 * returns just a date string if it's more than breakPoint days ago
 */
export function recencyString(date, breakPoint = 1) {
    date = new Date(date);
    const difference = secondsSince(date);
    return difference < breakPoint * SECONDS_PER_DAY ? `${dhm(difference)} ago` : date.toUTCString();
}
/**
 * returns a time amount with `d` `h` `m` and `s` units
 */
export function dhms(seconds) {
    seconds = Math.max(0, seconds);
    const days = Math.floor(seconds / 86400);
    seconds %= 86400; // seconds with full days taken out
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600; // seconds with full hours taken out
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return [days && `${days}d`, hours && `${hours}h`, minutes && `${minutes}m`, `${String(Math.floor(seconds)).padStart(2, "0")}s`]
        .filter(Boolean)
        .join(" ");
}
/**
 * returns a time amount with `d` `h` and `m` units
 */
export function dhm(seconds) {
    return dhms(seconds).replace(/\d+s$/, "") || "0m";
}
