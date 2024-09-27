'use strict';

let numberOfFilms = +prompt('How many movies you have seen?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('The last movies you watched?', ''),
          b = prompt('Rate it', '1');

    if (a != null && b != null && a != '' && b != ''&& a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done!');
    } else {
        console.log('error');
        i--;
    }    
    
}

if (personalMovieDB.count < 10) {
    console.log('not many');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('classic movie watcher');
} else if (personalMovieDB.count >= 30) {
    console.log('movie lover');
} else {
    console.log('error');
}

console.log(personalMovieDB);