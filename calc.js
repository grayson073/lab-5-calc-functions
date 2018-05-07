/* exported remainder, multiply, add, subtract, divide */
'use strict';

// Calculator function with description for remainder
function remainder(x, y) {
    var remainder = x % y;

    return {
        value: remainder,
        description: 'The remainder of ' + x + ' divided by ' + y + ' is ' + remainder + '.'
    };
}

// Calculator function with description for addition
function add(x, y) {
    var add = Number(x) + Number(y);

    return {
        value: add,
        description: 'The sum of ' + x + ' + ' + y + ' is ' + add + '.'
    };
}

// Calculator function with description for subtraction
function subtract(x, y) {
    var subtract = x - y;

    return {
        value: subtract,
        description: 'The answer to ' + x + ' - ' + y + ' is ' + subtract + '.'
    };
}

// Calculator function with description for division
function divide(x, y) {
    var divide = x / y;
    
    return {
        value: divide, //toFixed(2) rounds decimal to 2 places e.g. 1.67
        description: 'The number ' + x + ' divided by ' + y + ' is ' + divide.toFixed(2) + '. (Rounded to 2 decimal places)'
    };
}

// Calculator function with description for multiplication
function multiply(x, y) {
    var multiply = x * y;
    
    return {
        value: multiply,
        description: 'The number ' + x + ' multiplied by ' + y + ' is ' + multiply + '.'
    };
}