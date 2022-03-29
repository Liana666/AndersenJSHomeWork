class Calculator {
    #operation = [];

    constructor(formValue) {
        this.formValue = formValue;
    }

    // addElement(element) {
    //     console.log(this.#formula)
    //     this.#formula.push(element);
    //     console.log(this.#formula)
    // }

    compute(element) {

        this.#operation.push(element);
        this.formValue.value += element;

        this.#operation.forEach((i, ind, arr) => {

            if (i === "+") {
                let prev = parseFloat(arr.slice(0, ind).join(''));
                let end = parseFloat(arr.slice(ind + 1, arr.length - 1).join(''));
                console.log(prev)
                console.log(end)
            }


        })


    }


    // operationChange(oper) {

    //     switch (oper) {
    //         case '+':
    //             return +;
    //             break;

    //         case '-':
    //             operationResult = prevNumber - currentNumber;
    //             break;

    //         case '×':
    //             operationResult = prevNumber * currentNumber;
    //             break;

    //         case '÷':
    //             operationResult = prevNumber / currentNumber;
    //             break;

    //         default:
    //             return;
    //     }

    //     this.#currenOperand = Number.isFinite(operationResult) ? Math.round(operationResult * 100000000) / 100000000 : 'Ошибка';
    //     this.#operation = '';
    //     this.#previosOperand = '';
    // }


}



const currentView = document.querySelector('[data-view]');
const calculatorWrapper = document.querySelector('.calculator');
const keyboard = document.querySelector('.calculator__keyboard');
const calculator = new Calculator(currentView);


keyboard.addEventListener('click', function onclickKey(e) {
    //calculator.addElement(e.target.innerText);
    calculator.compute(e.target.innerText)
})