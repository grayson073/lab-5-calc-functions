// eslint-disable-next-line
/* globals remainder, add, subtract, multiple, divide */
/* exported testRemainder, testAdd, testSubtract, testDivide */
'use strict';



function testRemainder() {
    var result = remainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value);
    } else {
        console.log ('testRemainder - value - SUCCESS');
    }
}

function testAdd() {
    var result = add(29, 6);
    if(result.value !== 35) {
        console.error('testAdd - value - FAIL', result.value);
    } else {
        console.log ('testAdd - value - SUCCESS');
    }
}

function testSubtract() {
    var result = subtract(29, 6);
    if(result.value !== 23) {
        console.error('testSubtract - value - FAIL', result.value);
    } else {
        console.log ('testSubtract - value - SUCCESS');
    }
}

function testDivide() {
    var result = divide(30, 6);
    if(result.value !== 5) {
        console.error('testDivide - value - FAIL', result.value);
    } else {
        console.log ('testDivide - value - SUCCESS');
    }
}

testRemainder();
testAdd();
testSubtract();
testDivide();