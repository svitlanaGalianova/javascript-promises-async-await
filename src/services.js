export function fetchWithTimeout(delay) {
    //return a promise that uses a timeout which simulates an HTTP delay
    return new Promise(resolve => setTimeout(resolve, delay));
}