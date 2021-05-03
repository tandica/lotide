const assertEqual = require('./assertEqual');

function tail(array) {
if (array.length < 2) {
    return array;
} else {
    return array.slice(1);
    }
}

console.log(tail([5, 6, 7]))
console.log(tail(["Yo Yo", "Lighthouse", "Labs"]))

module.exports = tail;
