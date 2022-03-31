class Calculator {
    #previosOperand = '';
    #newOperand = '';
    #operator = '';
    #degOrRad = 'deg';

    constructor(formValue) {
        this.formValue = formValue;
    }

    appendNumber(number) {
        const isOnePoint = number === '.' && this.#newOperand.includes('.');

        if (isOnePoint) {
            return;
        }

        this.#newOperand = this.#newOperand.toString() + number.toString();
    }

    appendOperator(operator) {
        const isEmptyOperand = this.#newOperand === '';

        if (isEmptyOperand) {
            return;
        }

        this.#previosOperand = this.#newOperand;
        this.#operator = operator;
        this.#newOperand = '';
    }

    setDegOrRad(value) {
        value === 'deg' ? this.#degOrRad = 'rad' : this.#degOrRad = 'deg';
    }

    getDegOrRad() {
        return this.#degOrRad;
    }

    mathematicСompute() {
        const prevNumber = parseFloat(this.#previosOperand);
        const newNumber = parseFloat(this.#newOperand);
        const notValidNumbers = isNaN(prevNumber) || isNaN(newNumber);

        let operationResult;

        if (notValidNumbers) {
            this.#newOperand = 'Ошибка';
        }

        switch (this.#operator) {
            case '+':
                operationResult = prevNumber + newNumber;
                break;

            case '-':
                operationResult = prevNumber - newNumber;
                break;

            case '×':
                operationResult = prevNumber * newNumber;
                break;

            case '÷':
                operationResult = prevNumber / newNumber;
                break;

            default:
                return;
        }

        this.#newOperand = Number.isFinite(operationResult) ? this.mathRound(operationResult) : 'Ошибка';
        this.#operator = '';
        this.#previosOperand = '';
    }

    changeAppendNumber(operation) {
        const isEmptyOperand = this.#newOperand === '';
        const notEmptyOperand = this.#newOperand !== '';
        const newNumber = parseFloat(this.#newOperand);
        const notValidNumber = isNaN(newNumber);
        const isDeg = this.#degOrRad === 'deg';

        let operationResult;

        if (isEmptyOperand) {
            return;
        }

        if (notValidNumber) {
            this.#newOperand = 'Ошибка';
        }

        switch (operation) {
            case '±':
                operationResult = -newNumber;
                break;

            case '1/x':
                operationResult = 1 / newNumber;
                break;

            case '√x':
                operationResult = Math.sqrt(newNumber);
                break;

            case 'x!':
                operationResult = this.factorial(newNumber);
                break;

            case 'sin':
                operationResult = isDeg ? Math.sin(newNumber * Math.PI / 180) : Math.sin(newNumber);
                break;

            case 'cos':
                operationResult = isDeg ? Math.cos(newNumber * Math.PI / 180) : Math.cos(newNumber);
                break;

            case 'tan':
                operationResult = isDeg ? Math.tan(newNumber * Math.PI / 180) : Math.tan(newNumber);
                break;

            case 'ctg':
                operationResult = isDeg ? 1 / Math.tan(newNumber * Math.PI / 180) : 1 / Math.tan(newNumber);
                break;

            default:
                return;
        }

        operationResult = Number.isFinite(operationResult) ? this.mathRound(operationResult) : 'Ошибка';
        notEmptyOperand ? this.#newOperand = operationResult : this.#previosOperand = operationResult;
    }

    mathRound(number) {
        return Math.round(number * 100000000) / 100000000;
    }

    factorial(number) {
        return number !== 1 ? number * this.factorial(number - 1) : 1;
    }

    clear() {
        this.#previosOperand = '';
        this.#newOperand = '';
        this.#operator = '';
    }

    delete() {
        this.#newOperand = this.#previosOperand + this.#operator + this.#newOperand;
        this.#previosOperand = '';
        this.#operator = '';
        this.#newOperand = this.#newOperand.slice(0, this.#newOperand.length - 1);
    }

    updateView() {
        this.formValue.value = this.#previosOperand + this.#operator + this.#newOperand;
    }
}

const currentView = document.querySelector('[data-view]');
const calculatorWrapper = document.querySelector('.calculator');
const keyboard = document.querySelector('.calculator__keyboard');
const calculator = new Calculator(currentView);

keyboard.addEventListener('click', function onclickKey(e) {
    const targetElement = e.target;
    const targetElementText = e.target.innerText;

    if (targetElement.hasAttribute('data-number')) {
        calculator.appendNumber(targetElementText);
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-operation')) {
        calculator.appendOperator(targetElementText);
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-change-number')) {
        calculator.changeAppendNumber(targetElementText);
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-delete')) {
        calculator.delete();
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-equal')) {
        calculator.mathematicСompute();
        calculator.updateView();
        calculator.clear();
    }

    if (targetElement.hasAttribute('data-all-clear')) {
        calculator.clear();
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-scale')) {
        calculatorWrapper.classList.toggle('scale');
    }

    if (targetElement.hasAttribute('data-deg-or-rad')) {
        calculator.setDegOrRad(targetElementText);
        e.target.innerText = calculator.getDegOrRad();
    }

    if (targetElement.hasAttribute('data-constant')) {
        const constant = targetElementText === '𝜋' ? Math.PI.toFixed(8) : Math.E.toFixed(8);

        calculator.appendNumber(constant);
        calculator.updateView();
    }
})
