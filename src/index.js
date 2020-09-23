import { fetchWithTimeout, fetchBooks, fetchMovies, asyncFetchBooks, asyncFetchMovies } from "./services"
const movies = require("./data/movies.json")

//Fetch both books and movies with Promise.all()
function getBooksAndMovies() {
    return Promise.all([fetchBooks(), fetchMovies()])
        .then(([books, movies]) => ({
            books,
            movies
        }))
        .catch(error => console.log("Error fetching books and movies", error));
}

//Log results of getBooksAndMovies()
const getBooksAndMoviesPromise = getBooksAndMovies()
getBooksAndMoviesPromise.then((results) => { console.log('getBooksAndMoviesPromise', results) })

//Fetch either books or movies with Promise.race()
function getBooksOrMovies() {
    return Promise.race([fetchBooks(), fetchMovies()])
        .then(results => results)
        .catch(error => console.log("Error waiting for the promise race", error))
}

//Log results of getBooksOrMovies()
const getBooksOrMoviesPromise = getBooksOrMovies()
getBooksOrMoviesPromise.then((results) => { console.log('getBooksOrMoviesPromise', results) })

async function getBooksAndMoviesAsync() {
    try {
        const [books, movies] = await Promise.all([asyncFetchBooks(), asyncFetchMovies()])
        return { books, movies }
    } catch (error) {
        console.log("Error fetching books and movies", error)
    }
}

async function getBooksOrMoviesAsync() {
    try {
        const values = await Promise.race([asyncFetchBooks(), asyncFetchMovies()])
        return values
    } catch (error) {
        console.error("Error waiting for the promise race", error)
    }
}

getBooksAndMoviesAsync().then((results) => {
    console.log("movies and books", {
        movies: results.movies,
        books: results.books
    });
}).catch(error => {
    console.error("Error in getBooksAndMoviesAsync execution", error);
});

getBooksOrMoviesAsync().then((results) => {
    console.log("movies OR books", {
        results
    });
}).catch(error =>
    console.error("Error in getBooksOrMoviesAsync execution", error)
)
