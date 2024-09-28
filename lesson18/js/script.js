'use strict';

let numberOfFilms;

const start = () => {
    numberOfFilms = +prompt('How many movies you have seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies you have seen?', '');
    }
};

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
        const a = prompt('The last movies you watched?', ''),
              b = prompt('Rate it', '1');
    
        if (a != null && b != null && a != '' && b != ''&& a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
        } else {
            console.log('error');
            i--;
        }    
        
    };
}

rememberMyFilms();



const detectPersonalLvl = () => {
    if (personalMovieDB.count < 10) {
        console.log('not many');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('classic movie watcher');
    } else if (personalMovieDB.count >= 30) {
        console.log('movie lover');
    } else {
        console.log('error');
    }
}

detectPersonalLvl();

const showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

const writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) {
        const a = prompt(`Favorite genre number ${i}`);
        personalMovieDB.genres[i - 1] = a;
    }
}

writeYourGenres();