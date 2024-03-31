'use strict';

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*let i = 0;
do {
    const a = prompt('The last movie you watched?', ''),
    b = prompt('How much you appreciate him?');
if (a != null && b != null && a != '' && b != '' && a.length < 50) {
  personalMovieDB.movies[a] = b;
  console.log('Done!');        
} else {
  console.log('error');
  i--;
}
i++;
}
while (i < 2);

while (i < 2) {
    const a = prompt('The last movie you watched?', ''),
          b = prompt('How much you appreciate him?');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');        
    } else {
        console.log('error');
        i--;
    }
    i++;
}*/

for (let i = 0; i < 2; i++) {
    const a = prompt('The last movie you watched?', ''),
          b = prompt('How much you appreciate him?');
    if (a != null & b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done!');        
    } else {
        console.log('error');
        i--;
    }    
}

if (personalMovieDB.count < 10) {
    console.log('Many movies wathced.');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Classic movie watcher!');
} else if (personalMovieDB.count >= 30) {
    console.log('You\'re movie lover!');
} else {
    console.log('Error!');
}

console.log(personalMovieDB);