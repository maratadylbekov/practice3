'use strict';

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldiers = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const john = Object.create(soldiers); //это то же что и 1 только новый


// 1)
// const john = {
//     health: 100
// };

// Object.setPrototypeOf(john, soldiers); //это то же что и 2 только новый

// 2)
// john.__proto__ = soldiers;

// console.log(john.armor);

john.sayHello();