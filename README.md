# calculator
Simple calculator made with Javascript, HTML, &amp; CSS

The Odin Project's Foundations Course: Final Project
https://www.theodinproject.com/lessons/foundations-calculator 

Notes for this project:
1. Start with creating basic functions to test in the browser console
    - add, subtract, multiply, divide
2. For a display later, create variables for each of the 3 parts of an operation 
    - (i.e. 90 + 5 --> variables stored: 90, +, 5 )
3. Create a new function (operate) that takes an operator and 2 numbers, and then calls one of the basic functions on the numbers
4. Create a basic HTML calculator with buttons for:
    - each digit
    - each of the basic functions
    - an "Equal" (=) key
    - calculator operation display
    - a "Clear" (AC) button
5. Create the functions that populate the display when the digit buttons are clicked
6. Store the first number that is input when a user presses an operator button, and also save which operator has been chosen, then operate() on then when the " = " button is pressed
    - should run so that operate() updates the display with the solution
    - THIS IS THE HARDEST PART: figuring out the logic for how to store all the values and call the operate function with them
7. Users should be able to string together several operations, and get the right answer with each PAIR of numbers being evaluated at a time
    - i.e. [ 12 + 7 - 5 * 3 ] would equal 42
    - display should also update as strings of operations stretch
8. Round numbers with long decimals, to avoid overflowing the display
9. Pressing " = " before entering other info could cause problems !
10. Display a snarky error message if user tries to divide by 0... and don't let it crash your calculator !




: : : :  : :  : : : : : : :  : :  :NEXT : : : : STEPS: : : : : :  : : :: :  : : : : : : :  : :


- decimal button
    - check if mainDisplay already has a decimal in it
>>>>>>>DONE
- solution
    - limit the number of decimal points places displayed
    OR
    - convert to string and limit the number of characters displayed
    ?
>>>>>>>>DONE

: : : : : ::  : : : :: : :  :: : :  : : : :  : : :  : : :  : : :: : :  : : :  : : : :  : :  : 



Finish next steps
Went through numbered list of requirements for the project, and all tests are passed.

BONUS::: : :
want to add a "C" button to backspace mainDisplay.textContent from the right