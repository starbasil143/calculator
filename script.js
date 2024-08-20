function add(a, b)
{
    return +a + +b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{

    return b == 0 ? 143 : a / b;
}

let num1 = null;
let num2 = null;
let operator = null;

function operate(a, operation, b)
{
    switch (operation){
        case 'add':
            return add(a,b);
            break;
        case 'subtract':
            return subtract(a,b);
            break;
        case 'multiply':
            return multiply(a,b);
            break;
        case 'divide':
            return divide(a,b);
            break;
        default:
            return undefined;
            break;  
            
    }
}

const numButtons = document.querySelectorAll('.num');
const display = document.querySelector('#display');
const opButtons = document.querySelectorAll('.op')
const equalsButton = document.querySelector('#equals')
const clearButton = document.querySelector('#clear')

numButtons.forEach((numButton)=>{
    numButton.addEventListener("click", (e) => {
        if(num1 == null)
        {
            num1 = e.target.textContent;
        }
        else
        {
            num1 = +(num1 + e.target.textContent);
        }
        display.textContent = num1;
    })
})

opButtons.forEach((opButton) => {
    opButton.addEventListener("click", (e) => {
        if(operator !== null && num1 !== null && num2 !== null)
            {
                num1 = +operate(num2, operator, num1).toFixed(5);
                num2 = null;
                operator = null;
                display.textContent = num1;
            }
        switch (e.target.textContent)
        {
            case '+':
                operator = 'add'
                break;
            case '-':
                operator = 'subtract'
                break;
            case '*':
                operator = 'multiply'
                break;
            case '/':
                operator = 'divide'
                break;
        }
        num2 = num1;
        display.textContent = num1;
        num1 = null;
    })
})

equalsButton.addEventListener("click", (e) => {
    if(operator !== null && num1 !== null && num2 !== null)
            {
                num1 = +operate(num2, operator, num1).toFixed(5);
                num2 = null;
                operator = null;
                display.textContent = num1;
            }
})

clearButton.addEventListener("click", (e) => {
    num1 = null;
    num2 = null;
    display.textContent = '';
})


// const buttonsDiv = document.querySelector('#buttons');