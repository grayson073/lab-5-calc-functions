/* exported showRemainder, doAddition, doSubtraction, doDivision */
/* globals remainder, add, subtract, divide */


function showRemainder() {
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    var result = remainder(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('description').textContent = result.description;
}

function doAddition() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var result = add(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('description').textContent = result.description;
}

function doSubtraction() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var result = subtract(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('description').textContent = result.description;
}

function doDivision() {
    var x = document.getElementById('num1').value;
    var y = document.getElementById('num2').value;
    var result = divide(x, y);
    document.getElementById('answer').textContent = result.value;
    document.getElementById('description').textContent = result.description;
}