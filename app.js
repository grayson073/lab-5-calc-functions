/* exported showRemainder, doAddition, doSubtraction, doDivision, doMultiplication */
/* globals remainder, add, subtract, divide, multiply */

// Function that calls calculator function for remainder based on user inputs; returns value and description of the math
function showRemainder() {
    var x = parseInt(document.getElementById('remainder1').value);
    var y = parseInt(document.getElementById('remainder2').value);
    var result = remainder(x, y);
    document.getElementById('answerRemainder').textContent = result.value;
    document.getElementById('remainder-description').textContent = result.description;
}

// Function that calls calculator function for addition based on user inputs; returns value and description of the math
function doAddition() {
    var x = document.getElementById('addition1').value;
    var y = document.getElementById('addition2').value;
    var result = add(x, y);
    document.getElementById('answerAddition').textContent = result.value;
    document.getElementById('addition-description').textContent = result.description;
}

// Function that calls calculator function for subtraction based on user inputs; returns value and description of the math
function doSubtraction() {
    var x = document.getElementById('subtraction1').value;
    var y = document.getElementById('subtraction2').value;
    var result = subtract(x, y);
    document.getElementById('answerSubtraction').textContent = result.value;
    document.getElementById('subtraction-description').textContent = result.description;
}

// Function that calls calculator function for division based on user inputs; returns value and description of the math
function doDivision() {
    var x = document.getElementById('division1').value;
    var y = document.getElementById('division2').value;
    var result = divide(x, y);
    document.getElementById('answerDivision').textContent = result.value;
    document.getElementById('division-description').textContent = result.description;
}

// Function that calls calculator function for multiplication based on user inputs; returns value and description of the math
function doMultiplication() {
    var x = document.getElementById('multiplication1').value;
    var y = document.getElementById('multiplication2').value;
    var result = multiply(x, y);
    document.getElementById('answerMultiplication').textContent = result.value;
    document.getElementById('multiplication-description').textContent = result.description;
}