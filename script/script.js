class Calculator {
    #currenOperand = '';
    #previosOperand = '';
    #operation = '';

    constructor(formValue) {
        this.formValue = formValue;
    }

    clear() {
        this.#currenOperand = 0;
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

    changeOperation(operation) {
        if (this.#currenOperand === '') {
            return;
        }

        this.#previosOperand = this.#currenOperand;
        this.#operation = operation;
        this.#currenOperand = '';
    }

    compute() {
        let operationResult;
        const prevNumber = parseFloat(this.#previosOperand);
        const currentNumber = parseFloat(this.#currenOperand);

        if (isNaN(prevNumber) || isNaN(currentNumber)) {
            this.#currenOperand = 'Ошибка';
        }

        //console.log(this.#operation)

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

    updateView() {
        this.formValue.value = this.#previosOperand + this.#operation + this.#currenOperand;
        //this.previosOperandText.innerText = this.#previosOperand;
    }


}


const currentView = document.querySelector('[data-view]');
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
        calculator.compute();
        calculator.updateView();
    }

})
