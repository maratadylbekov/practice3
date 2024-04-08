'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
    
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched?', '');
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Many movies wathced.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Classic movie watcher!');
        } else if (personalMovieDB.count >= 30) {
            console.log('You\'re movie lover!');
        } else {
            console.log('Error!');
        }
    }, 

    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    
    toggleMyVisibleDB: () =>{
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Your favorite genre number ${i}`);
            // if (genre === '' || genre == null) {
            //     console.log('Incorrect input');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre; 
            // }  
            
            let genres = prompt(`Write your favorite genres`);
            if (genres === '' || genres == null) {
                console.log('Incorrect input');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }  
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        })
    }
};
