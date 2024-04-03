'use strict';

let numberOfFilms;

const start = () => {
    numberOfFilms = +prompt('How many movies have you watched?', '');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const rememberMyFilms = () => {
    for (let i = 0; i < 2; i++) {
        const a = prompt('The last movie you watched?', ''),
              b = prompt('How much you appreciate him?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');        
        } else {
            console.log('error');
            i--;
        }    
    }
}

// rememberMyFilms();

const detectPersonalLevel = () => {
    if (personalMovieDB.count < 10) {
        console.log('Many movies wathced.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Classic movie watcher!');
    } else if (personalMovieDB.count >= 30) {
        console.log('You\'re movie lover!');
    } else {
        console.log('Error!');
    }
}

detectPersonalLevel();

const showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

const writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`);       
    }
}

writeYourGenres();