import { fetchWithTimeout, fetchBooks, fetchMovies } from "./services"
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
        .catch(error => console.log("Error waiting for the promise race", error));
}

//Log results of getBooksOrMovies()
const getBooksOrMoviesPromise = getBooksOrMovies()
getBooksOrMoviesPromise.then((results) => { console.log('getBooksOrMoviesPromise', results) })