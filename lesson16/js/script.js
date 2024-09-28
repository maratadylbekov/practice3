'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello World!');
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(9, 5));