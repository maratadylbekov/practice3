'use strict';

//ToString

//1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));
console.log(String(null));

// 2)
console.log(typeof(null + ''));

const num = 5;

console.log('https://vk.com/catalog' + num);

const fontSize = 26 + 'px';


//ToNumber

//1)
console.log(typeof(Number(4)));

//2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answer = +prompt('hello', '');


// ToBoolean

// 0, '', null, undefined, NaN

// 1)
let switcher = null;

if(switcher) {
    console.log('Working...');
}

switcher = 1;

if(switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean(4)));

// 3)
console.log(typeof(!!'4444'));