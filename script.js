document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '^'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 's') {
        appendToDisplay('sin');
    } else if (key === 'c') {
        appendToDisplay('cos');
    } else if (key === 't') {
        appendToDisplay('tan');
    } else if (key === 'r') {
        appendToDisplay('sqrt');
    }
});

function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        display.innerText = Math.sqrt(eval(display.innerText));
    } catch (e) {
        display.innerText = 'Error';
    }
}

function calculateExponentiation() {
    const display = document.getElementById('display');
    try {
        const [base, exponent] = display.innerText.split('^');
        display.innerText = Math.pow(eval(base), eval(exponent));
    } catch (e) {
        display.innerText = 'Error';
    }
}

function calculateTrigonometric(func) {
    const display = document.getElementById('display');
    try {
        const value = eval(display.innerText);
        switch (func) {
            case 'sin':
                display.innerText = Math.sin(value);
                break;
            case 'cos':
                display.innerText = Math.cos(value);
                break;
            case 'tan':
                display.innerText = Math.tan(value);
                break;
        }
    } catch (e) {
        display.innerText = 'Error';
    }
}
