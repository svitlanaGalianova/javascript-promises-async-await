export function fetchWithTimeout(delay) {
    //return a promise that uses a timeout which simulates an HTTP delay
    return new Promise(resolve => setTimeout(resolve, delay));
}

export function fetchMovies() {
    //use the browser's Fetch API to get the movies data from movies.json
    return fetch("./data/movies.json")
        .then(response => response.json())
        .then(movies => movies)
        .catch(error => console.log(error));
}

export function fetchBooks() {
    return fetch("./data/books.json")
        .then(response => response.json())
        .then(books => books)
        .catch(error => console.log(error));
}

export async function asyncFetchMovies() {
    try {
        const response = await fetch("/data/movies.json")
        const results = await response.json()
        return results
    } catch (error) {
        console.log(error)
    }
}

export async function asyncFetchBooks() {
    try {
        const response = await fetch("/data/books.json")
        const results = await response.json()
        return results
    } catch (error) {
        console.log(error)
    }
}
