"use strict";

const learnJS = (lang, callback) => {
    console.log(`I'm learning: ${lang}.`);
    callback();
}

const done = () => {
    console.log('I have passed this lesson.');
}

learnJS('JavaScript', done);