let mainDisplay = document.querySelector(".mainDisplay");
let storedDisplay = document.querySelector(".storedDisplay");
let firstNum = document.querySelector(".firstNum");
let operator = document.querySelector(".operator");
let nextNum = document.querySelector(".nextNum");

let solution;
let nextOperator;

function display(digit) {
    if (mainDisplay.textContent.length < 9 ) {
        if (mainDisplay.textContent && firstNum.textContent && operator.textContent && nextNum.textContent) {
            if (solution && nextOperator) {
                firstNum.textContent = mainDisplay.textContent;
                nextNum.textContent = "";
                operator.textContent = `${nextOperator}`;
                mainDisplay.textContent = "";
                mainDisplay.textContent += `${digit}`;
            } else {
            firstNum.textContent = "";
            nextNum.textContent = "";
            operator.textContent = "";
            mainDisplay.textContent = `${digit}`;
        }
        } else if (mainDisplay.textContent && firstNum.textContent && operator.textContent && nextNum.textContent == "") {
            mainDisplay.textContent += `${digit}`;
        } else if (mainDisplay.textContent == "" && firstNum.textContent && operator.textContent && nextNum.textContent == "") {
            mainDisplay.textContent += `${digit}`;
        } else if (!mainDisplay.textContent) {
            mainDisplay.textContent = `${digit}`;
        } else {
            mainDisplay.textContent += `${digit}`;
        }    
    }
}

function addNumbers () {
        if (mainDisplay.textContent && operator.textContent && firstNum.textContent && nextNum.textContent) {
            if (solution) {
                if (nextOperator) {
                    operator.textContent = `${nextOperator}`;
                } else {
                    firstNum.textContent = mainDisplay.textContent;
                    nextNum.textContent = "";
                    mainDisplay.textContent = "";
                    nextOperator = " + ";    
                }
                } else if (!solution) {
            firstNum.textContent = mainDisplay.textContent;
            operator.textContent = " + ";
            nextNum.textContent = "";
            mainDisplay.textContent = "";
            }
        } else if (mainDisplay.textContent && firstNum.textContent && nextNum.textContent == "" && operator.textContent) {
            nextNum.textContent = mainDisplay.textContent;
            solution = operate(firstNum.textContent, operator.textContent, nextNum.textContent);
            mainDisplay.textContent = `${solution}`;
            nextOperator = " + ";
        } else if (mainDisplay.textContent && firstNum.textContent == "" && operator.textContent == "" && nextNum.textContent == "") {
            firstNum.textContent = mainDisplay.textContent;
            operator.textContent = " + ";
            mainDisplay.textContent = "";
        }
}

function subtractNumbers () {
    if (mainDisplay.textContent && operator.textContent && firstNum.textContent && nextNum.textContent) {
        if (solution) {
            if (nextOperator) {
                operator.textContent = `${nextOperator}`;
            } else {
                firstNum.textContent = mainDisplay.textContent;
                nextNum.textContent = "";
                mainDisplay.textContent = "";
                nextOperator = " - ";    
            }
        } else if (!solution) {
        firstNum.textContent = mainDisplay.textContent;
        operator.textContent = " - ";
        nextNum.textContent = "";
        mainDisplay.textContent = "";
        }
    } else if (mainDisplay.textContent && firstNum.textContent && nextNum.textContent == "" && operator.textContent) {
        nextNum.textContent = mainDisplay.textContent;
        solution = operate(firstNum.textContent, operator.textContent, nextNum.textContent);
        mainDisplay.textContent = `${solution}`;
        nextOperator = " - ";
    } else if (mainDisplay.textContent && firstNum.textContent == "" && operator.textContent == "" && nextNum.textContent == "") {
        firstNum.textContent = mainDisplay.textContent;
        operator.textContent = " - ";
        mainDisplay.textContent = "";
    }
}

function multiplyNumbers () {
    if (mainDisplay.textContent && operator.textContent && firstNum.textContent && nextNum.textContent) {
        if (solution) {
            if (nextOperator) {
                operator.textContent = `${nextOperator}`;
            } else {
                firstNum.textContent = mainDisplay.textContent;
                nextNum.textContent = "";
                mainDisplay.textContent = "";
                nextOperator = " * ";    
            }
        } else if (!solution) {
        firstNum.textContent = mainDisplay.textContent;
        operator.textContent = " * ";
        nextNum.textContent = "";
        mainDisplay.textContent = "";
        }
    } else if (mainDisplay.textContent && firstNum.textContent && nextNum.textContent == "" && operator.textContent) {
        nextNum.textContent = mainDisplay.textContent;
        solution = operate(firstNum.textContent, operator.textContent, nextNum.textContent);
        mainDisplay.textContent = `${solution}`;
        nextOperator = " * ";
    } else if (mainDisplay.textContent && firstNum.textContent == "" && operator.textContent == "" && nextNum.textContent == "") {
        firstNum.textContent = mainDisplay.textContent;
        operator.textContent = " * ";
        mainDisplay.textContent = "";
    }
}

function divideNumbers () {
    if (mainDisplay.textContent && operator.textContent && firstNum.textContent && nextNum.textContent) {
        if (solution) {
            if (nextOperator) {
                operator.textContent = `${nextOperator}`;
            } else {
                firstNum.textContent = mainDisplay.textContent;
                nextNum.textContent = "";
                mainDisplay.textContent = "";
                nextOperator = " / ";    
            }
        } else if (!solution) {
        firstNum.textContent = mainDisplay.textContent;
        operator.textContent = " / ";
        nextNum.textContent = "";
        mainDisplay.textContent = "";
        }
    } else if (mainDisplay.textContent && firstNum.textContent && nextNum.textContent == "" && operator.textContent) {
        nextNum.textContent = mainDisplay.textContent;
        solution = operate(firstNum.textContent, operator.textContent, nextNum.textContent);
        mainDisplay.textContent = `${solution}`;
        nextOperator = " / ";
    } else if (mainDisplay.textContent && firstNum.textContent == "" && operator.textContent == "" && nextNum.textContent == "") {
        firstNum.textContent = mainDisplay.textContent;
        operator.textContent = " / ";
        mainDisplay.textContent = "";
    }
}

function allClear() {
    mainDisplay.textContent = "";
    firstNum.textContent = "";
    operator.textContent = "";
    nextNum.textContent = "";
}

function operate(first, op, next) {
    let solution;
    if (op == " + ") {
        solution = parseInt(first) + parseInt(next);
    } else if (op == " - ") {
        solution = parseInt(first) - parseInt(next);
    } else if (op == " * ") {
        solution = parseInt(first) * parseInt(next);
    } else if (op == " / ") {
        solution = parseInt(first) / parseInt(next);
    }

    return solution;
}