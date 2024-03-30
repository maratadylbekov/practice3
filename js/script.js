const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('The last movie you watched?', ''),
      b = prompt('How much you appreciate him?'),
      c = prompt('The last movie you watched?', ''),
      d = prompt('How much you appreciate him?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);