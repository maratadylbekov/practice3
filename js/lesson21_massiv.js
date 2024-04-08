'use strict';

const arr = [1, 22, 13, 56, 90, 10, 13, 21];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}




// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} in massive ${arr}`)
// });

// arr[99] = 0;
// console.log(arr.length);

const del = () => {
    console.log(arr);
    for (let i = arr.length - 1; i >= 0; i--) {
        arr.pop();
        console.log(arr);
    }
}

// del();

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }