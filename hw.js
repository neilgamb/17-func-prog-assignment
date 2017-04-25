/**
 * This assignment requires that you write IMPERATIVE and FUNCTIONAL versions of the
 * same code.
 *
 * For IMPERATIVE, you should avoid passing functions as parameters.
 * For FUNCTIONAL, you should avoid for loops and mutating variables.
 */

//let planets = require('./planets');
//let settlers = require('./settlers');
let reportcard = require('./reportcard');
let items = require('./items');
let animals = require('./animals');

/**
 * Problem #1
 *
 * Write a function that returns the subjects from a student's report card. Use the REPORTCARD
 * dataset as an input.
 */


// IMPERATIVE

function subjects(card){
    let array = [];
    for(i = 0; i < reportcard.length; i++){
        array.push(reportcard[i].subject);
    }

    return array;
}

console.log("-- No.1 IMPERATIVE -------------")
console.log(subjects(reportcard));

// FUNCTIONAL
function subject(array){
    return array.subject;
}

console.log("-- No.1 FUNCTIONAL -------------")
console.log(reportcard.map(subject));


/**
 * Problem #2
 * 
 * Write a function that applies a sales tax of 10% to the prices of all items in the array. The function
 * should return an array of items (not only their prices).
 *
 * Use the ITEMS dataset as an input.
 */

// IMPERATIVE

function salesTax(items){
    // let array = [];

    for(i = 0; i < items.length; i++){
        items[i].price = items[i].price * 1.1;
    }

    return items;
}

console.log("-- No.2 IMPERATIVE -------------")
console.log(salesTax(items));


// FUNCTIONAL
function tax(array){
    array.price = array.price * 1.1;
    return array;
}

console.log("-- No.2 FUNCTIONAL -------------");
console.log("-- Note: values affected by imperative function");
console.log(items.map(tax));


/**
 * Problem #3
 *
 * Write a function that returns an array of the same size as an input array but filled with zeroes. For 
 * example, the array [5, 9, 'hello'] would return [0, 0, 0].
 */

function replaceZeros(array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(0);
    }
    return newArray;
}
console.log("-- No.3 IMPERATIVE -------------")
console.log(replaceZeros([5, 6, 'hello', 6, 'f']));


function replace(array){
    return 0;
}

console.log("-- No.3 FUNCTIONAL -------------")
console.log([5, 6, 'hello', 6, 'f'].map(replace));


/**
 * Problem #4
 *
 * Write a function that returns an abbreviation for the provided phrase. The abbreviation should consist of
 * a capitalized version of the first letter in each word.
 */

function abbreviate(string){
    let words = string.split(' ');
    let abbrev = [];

    for(let i = 0; i < words.length; i++){
        let chars = words[i].split('');
            abbrev.push(chars[0].toUpperCase());
    }

    return abbrev.join('');

}
console.log("-- No.4 IMPERATIVE -------------")
console.log(abbreviate('this is a very long string'));

let test = 'this is a very long string';

function splitString(string){
    let newString = string.split(' ');
    return newString;
}

function acronym (word){
    return word[0].toUpperCase();
}

console.log("-- No.4 FUNCTIONAL -------------")
console.log(splitString(test).map(acronym).join(''));


/**
 * Problem #5
 *
 * Write a function that removes all punctuation from a provided sentence (exclamation marks, periods, and 
 * commas). 
 */

function removePunc(string){
    let result = [];
    let chars = string.split('');
    for (let i = 0; i < chars.length; i++){
        if (chars[i] !== '!' && chars[i] !== '.' && chars[i] !== ','){
            result.push(chars[i]);
        }
    }
    let resultString = result.join('');
    return resultString;
}
console.log("-- No.5 IMPERATIVE -------------")
console.log(removePunc('Hi, my Name is Neilson!'));

function splitStr(string){
    let chars = string.split('');
    return chars;
}

function rmPunc(char){
        if (char === '!' || char === '.' || char === ','){
            return '';
        } else {
            return char;
        }
}

console.log("-- No.5 IMPERATIVE -------------")
console.log(splitStr('Hi, my Name is Neilson!').map(rmPunc).join(''));


/**
 * Problem #6
 *
 * Write a function that accepts an array of numbers and returns an array of boolean values reflecting whether
 * each number is negative (true if yes, false if no).
 */


function trueFalse(array){
    let result = [];
    for (let i = 0; i < array.length; i++){
        if(array[i] < 0){
            result.push(false);
        } else {
            result.push(true);
        }
    }

    return result;
}

console.log("-- No.6 IMPERATIVE -------------")
console.log(trueFalse([1, 4, 423, -3, 2, -21.7]));


function tf(num){
        if(num < 0){
            return false;
        } else {
            return true;
        }
}

console.log("-- No.6 FUNCTIONAL -------------")
console.log([1, 4, 423, -3, 2, -21.7].map(tf));

/**
 * Problem #7
 *
 * Write a function that accepts an array of farm animals and returns the distance of each animal from the barn
 * (specified as a number). Use the ANIMALS array as an input for this problem, and assume the barn is at (0, 0).
 *
 * You will need to use the Pythagorean theorem to solve this!
 * https://en.wikipedia.org/wiki/Pythagorean_theorem#Other_forms_of_the_theorem
 */

function distance(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(Math.sqrt((array[i].x * array[i].x) + (array[i].y * array[i].y)));
    }
    return result;
}

console.log("-- No.7 IMPERATIVE -------------")
console.log(distance(animals));


function dist(animal){
return Math.sqrt((animal.x * animal.x) + (animal.y * animal.y))
}

console.log("-- No.7 FUNCTIONAL -------------")
console.log(animals.map(dist));