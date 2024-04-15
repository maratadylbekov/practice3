'use strict';

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: green; width: 500px';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'magenta';
});

const div = document.createElement('div');
// const text = document.createTextNode('I am here');

div.classList.add('black');

// document.body.append(div);


wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.prepend(div);

// hearts[0].before(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

hearts[0].replaceWith(circles[0]);
// wrapper.replaceWith(hearts[0], circles[0]);

div.innerHTML = '<h1>Hello, World!</h1>';
// div.textContent = 'Hello, World!!!';

// div.insertAdjacentHTML('beforebegin', '<h2>Hello, World!</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello, World!</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello, World!</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello, World!</h2>');