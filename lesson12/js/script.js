'use strict';
let numberOfFilms = +prompt('How many movies you have seen?', '10');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('The last movies you watched?', ''),
      b = prompt('Rate it', '1'),
      c = prompt('The last movies you watched?', ''),
      d = prompt('Rate it', '1');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);