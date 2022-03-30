class Calculator {
    #currenOperand = '';
    #previosOperand = '';
    #operation = '';
    #degOrRad = 'deg';

    constructor(formValue) {
        this.formValue = formValue;
    }

    clear() {
        this.#currenOperand = '';
        this.#previosOperand = '';
        this.#operation = '';
    }

    delete() {
        this.#currenOperand = this.#currenOperand.slice(0, this.#currenOperand.length - 1);
    }

    appendNumber(number) {
        if (number === '.' && this.#currenOperand.includes('.')) {
            return;
        }

        this.#currenOperand = this.#currenOperand.toString() + number.toString();
    }

    setDegOrRad(value) {
        value === 'deg' ? this.#degOrRad = 'rad' : this.#degOrRad = 'deg';
    }

    getDegOrRad() {
        return this.#degOrRad;
    }

    changeOperation(operation) {
        if (this.#currenOperand === '') {
            return;
        }

        this.#previosOperand = this.#currenOperand;
        this.#operation = operation;
        this.#currenOperand = '';
    }

    mathematicalСompute() {
        let operationResult;
        const prevNumber = parseFloat(this.#previosOperand);
        const currentNumber = parseFloat(this.#currenOperand);


        if (isNaN(prevNumber) || isNaN(currentNumber)) {
            this.#currenOperand = 'Ошибка';
        }

        switch (this.#operation) {
            case '+':
                operationResult = prevNumber + currentNumber;
                break;

            case '-':
                operationResult = prevNumber - currentNumber;
                break;

            case '×':
                operationResult = prevNumber * currentNumber;
                break;

            case '÷':
                operationResult = prevNumber / currentNumber;
                break;

            default:
                return;
        }

        this.#currenOperand = Number.isFinite(operationResult) ? Math.round(operationResult * 100000000) / 100000000 : 'Ошибка';
        this.#operation = '';
        this.#previosOperand = '';
    }

    factorial(number) {
        return number !== 1 ? number * this.factorial(number - 1) : 1;
    }


    changeNumber(operation) {

        console.log(operation)
        if (this.#currenOperand === '') {
            return;
        }

        switch (operation) {
            case '±':

                if (this.#currenOperand !== '') {
                    this.#currenOperand = -this.#currenOperand;
                } else {
                    this.#previosOperand = -this.#previosOperand;
                }

                break;


            case '1/x':

                if (this.#currenOperand !== '') {
                    this.#currenOperand = 1 / this.#currenOperand;
                } else {
                    this.#previosOperand = 1 / this.#previosOperand;
                }

                break;


            case '√x':

                if (this.#currenOperand !== '') {
                    this.#currenOperand = Math.sqrt(this.#currenOperand);
                } else {
                    this.#previosOperand = Math.sqrt(this.#previosOperand);
                }

                break;


            case 'x!':

                if (this.#currenOperand !== '') {
                    this.#currenOperand = this.factorial(this.#currenOperand);
                } else {
                    this.#previosOperand = this.factorial(this.#previosOperand);
                }

                break;


            default:
                return;
        }
    }



    trigonometricCompute(operation) {
        let operationResult;
        const currentNumber = parseFloat(this.#currenOperand);

        this.#operation = operation;

        if (isNaN(currentNumber)) {
            this.#currenOperand = 'Ошибка';
        }

        switch (this.#operation) {
            case 'sin':

                if (this.#degOrRad === 'deg') {
                    operationResult = Math.sin(currentNumber * Math.PI / 180);
                } else {
                    operationResult = Math.sin(currentNumber);
                }

                break;


            case 'cos':

                if (this.#degOrRad === 'deg') {
                    operationResult = Math.cos(currentNumber * Math.PI / 180);
                } else {
                    operationResult = Math.cos(currentNumber);
                }

                break;


            case 'tan':

                if (this.#degOrRad === 'deg') {
                    operationResult = Math.tan(currentNumber * Math.PI / 180);
                } else {
                    operationResult = Math.tan(currentNumber);
                }

                break;


            case 'ctg':

                if (this.#degOrRad === 'deg') {
                    operationResult = 1 / Math.tan(currentNumber * Math.PI / 180);
                } else {
                    operationResult = 1 / Math.tan(currentNumber);
                }

                break;


            default:
                return;
        }

        this.#currenOperand = Number.isFinite(operationResult) ? Math.round(operationResult * 100000000) / 100000000 : 'Ошибка';
        this.#operation = '';
        this.#previosOperand = '';
    }


    updateView() {
        this.formValue.value = this.#previosOperand + this.#operation + this.#currenOperand;
    }


}


const currentView = document.querySelector('[data-view]');
const calculatorWrapper = document.querySelector('.calculator');
const keyboard = document.querySelector('.calculator__keyboard');
const calculator = new Calculator(currentView);


keyboard.addEventListener('click', function onclickKey(e) {
    let targetElement = e.target;
    const targetElementText = e.target.innerText;


    if (targetElement.hasAttribute('data-number')) {
        calculator.appendNumber(targetElementText);
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-delete')) {
        calculator.delete();
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-operation')) {
        calculator.changeOperation(targetElementText);
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-equal')) {
        calculator.mathematicalСompute();
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

    if (targetElement.hasAttribute('data-trigonometric')) {
        calculator.trigonometricCompute(targetElementText);
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-plus-minus')) {
        calculator.setPlusMinus();
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-constant')) {
        let constant;
        targetElementText === '𝜋' ? constant = Math.PI.toFixed(8) : constant = Math.E.toFixed(8)

        calculator.appendNumber(constant);
        calculator.updateView();
    }

    if (targetElement.hasAttribute('data-change-number')) {
        calculator.changeNumber(targetElementText);
        calculator.updateView();
    }


})


//console.log()