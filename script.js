const form = document.querySelector('form');

function calculate(event) {
    event.preventDefault();
    const num1 = +form.num1.value;
    const num2 = +form.num2.value;
    const operator = form.operator.value;
    let result = 0;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }else{
        throw new Error('Invalid operator');
    }
    form.result.value = result;
    form.num1.value = '';
    form.num2.value = '';
}

form.addEventListener('submit', calculate);