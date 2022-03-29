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


    setPlusMinus() {
        if (this.#currenOperand !== '') {
            this.#currenOperand = -this.#currenOperand;
        } else {
            this.#previosOperand = -this.#previosOperand;
        }
    }

    bracketeOpearation(bracket) {
        console.log(bracket)
        if (bracket === '(') {
            this.#currenOperand = '(' + this.#currenOperand
        } else {
            this.#currenOperand = ')' + this.#currenOperand
        }
    }


    trigonometricCompute(operation) {
        let operationResult;
        console.log(this.#currenOperand)
        const currentNumber = parseFloat(this.#currenOperand);
        console.log(currentNumber)

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

    if (e.target.hasAttribute('data-number')) {
        calculator.appendNumber(e.target.innerText);
        calculator.updateView();
    }

    if (e.target.hasAttribute('data-delete')) {
        calculator.delete();
        calculator.updateView();
    }

    if (e.target.hasAttribute('data-operation')) {
        calculator.changeOperation(e.target.innerText);
        calculator.updateView();
    }

    if (e.target.hasAttribute('data-equal')) {
        calculator.mathematicalСompute();
        calculator.updateView();
        calculator.clear();
    }

    if (e.target.hasAttribute('data-all-clear')) {
        calculator.clear();
        calculator.updateView();
    }

    if (e.target.hasAttribute('data-scale')) {
        calculatorWrapper.classList.toggle('scale');
    }

    if (e.target.hasAttribute('data-deg-or-rad')) {
        calculator.setDegOrRad(e.target.innerText);
        e.target.innerText = calculator.getDegOrRad();
    }

    if (e.target.hasAttribute('data-trigonometric')) {
        calculator.trigonometricCompute(e.target.innerText);
        calculator.updateView();
    }

    if (e.target.hasAttribute('data-plus-minus')) {
        calculator.setPlusMinus();
        calculator.updateView();
    }

    if (e.target.hasAttribute('data-bracket')) {
        calculator.bracketeOpearation();
        calculator.updateView();
    }

})
