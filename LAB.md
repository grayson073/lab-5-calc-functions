# (Tested) Calc Functions

Write an app that has several sections that take numeric input and return the resulting 
value as well as a description of the operations.

For example, the addition section has two inputs, and clicking the button displays the sum as well as the description. For example,
inputting 3 and 4 would display a 7 as well as the text "Sum of 3 and 4 is 7".

![image](https://user-images.githubusercontent.com/478864/39680869-55c02e08-515a-11e8-84d3-ff44339a7045.png)


## Testing Functions

Use TDD to develop your operation functions, then integrate the UI (user interface - the pieces the end user of the app uses).

You will need to create the following files for testing and running your app:

file | purpose
---|---
`test.html` | html file that loads tests (`test.js`) and the calculation functions (`calc.js`)
`test.js` | tests for your calculation functions
`calc.js` | actual calculation functions
`index.html` | html file that loads the app (`app.js`) plus the calculation functions (`calc.js`)
`app.js` | code that responds to the button clicks in each section, calls 
the appropriate calculation function, and updates the UI with the response

Basic process:

1. Get `test.html` setup loading `calc.js` and `test.js`, and run with live server
2. Write a test function in `test.js` (don't forget to call it at the end of the file)
3. Write the corresponding function in `calc.js`
4. Write the function in `calc.js` so that it makes the test pass
5. Repeat from #2 until all the cases for the operation are complete
6. Get `index.html` setup loading `calc.js` and `app.js` and run with live server
7. Implement html for the operation and wire button `onclick` to call a function in `app.js`
8. Write the function in `app.js` that reads the input(s), calls the write calc function, then writes
the response back to the DOM (html).
9. Repeat from #1 for next operation

## Calc Functions

Required:

1. add
2. subtract
3. multiple
4. divide

Stretch Goal Ideas:

1. Find the hypotenuse of right triangle given the length of the two legs
1. Make divide throw an error when dividing by zero
1. Divide with remainder (7 divide by 3 returns something like `{ value: 2, remainder: 1, description: '...' }`)
1. IsEven
1. IsOdd
1. Anything else you can think up...

