/* globals add, subtract, multiple, divide */
/* exported testAdd */
'use strict';



function testRemainder() {
    var result = remainder(29, 6);
    if(result.value !== 5) {
        console.error('testRemainder - value - FAIL', result.value, 7);
    } else {
        console.log ('testRemainder - value - SUCCESS');
    }
}

testRemainder();