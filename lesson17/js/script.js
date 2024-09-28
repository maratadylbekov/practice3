'use strict';

const str = 'test';

console.log(str.length);

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';
console.log(logg.slice(6));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(typeof(parseInt(test)));
console.log(parseFloat(test));