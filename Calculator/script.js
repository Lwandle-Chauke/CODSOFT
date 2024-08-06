const calculator = {
    displayValue: '',
};

function inputDigit(digit) {
    calculator.displayValue += digit;
}

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(operator) {
    calculator.displayValue += operator;
}

function resetCalculator() {
    calculator.displayValue = '';
}

function calculateResult() {
    try {
        calculator.displayValue = String(eval(calculator.displayValue));
    } catch (error) {
        calculator.displayValue = 'Error';
    }
}

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    if (target.classList.contains('equal-sign')) {
        calculateResult();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});
