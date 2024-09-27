'use strict';

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

// const num = 50;
if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('too big')
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok') : console.log('error');

const num = 50;

switch (num) {
    case 49:
        console.log('incorrect');
        break;
    case 100:
        console.log('too big');
        break;
    case 51:
        console.log('correct');
        break;
    default:
        console.log('try again');
        break;
}