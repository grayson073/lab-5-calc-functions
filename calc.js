/* exported remainder, multiply, add, subtract, divide */
'use strict';

function remainder(x, y) {
    var remainder = x % y;

    return {
        value: '= ' + remainder,
        description: 'The remainder of ' + x + ' divided by ' + y + ' is ' + remainder + '.'
    };
}

function add(x, y) {
    var add = Number(x) + Number(y);

    return {
        value: '= ' + add,
        description: 'The sum of ' + x + ' + ' + y + ' is ' + add + '.'
    };
}

function subtract(x, y) {
    var subtract = x - y;

    return {
        value: '= ' + subtract,
        description: 'The answer to ' + x + ' - ' + y + ' is ' + subtract + '.'
    };
}

function divide(x, y) {
    var divide = x / y;
    
    return {
        value: '= ' + divide.toFixed(2), //toFixed(2) rounds decimal to 2 places e.g. 1.67
        description: 'The number ' + x + ' divided by ' + y + ' is ' + divide.toFixed(2) + '. (Rounded to 2 decimal places)'
    };
}