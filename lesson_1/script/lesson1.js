const FIRST_NUMBER = +prompt('Введите первое число');
const SECOND_NUMBER = +prompt('Введите второе число');

/////// Check a number for validity
function isValid(number) {
    return isNaN(number) || number <= 0;
}

/////// 1 task
function numberSystemChange(firstNumber, secondNumber) {
    if (isValid(firstNumber) || isValid(secondNumber)) {
        console.log('Некорректный ввод!');
    } else {
        console.log(firstNumber.toString(secondNumber));
    }
}

/////// 2 task
function sumAndSubtractNumbers(firstNumber, secondNumber) {
    if (isValid(firstNumber)) {
        console.log('Некорректный ввод!');
    } else if (isValid(secondNumber)) {
        console.log('Некорректный ввод!');
    } else {
        console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber - secondNumber}.`);
    }
}

numberSystemChange(FIRST_NUMBER, SECOND_NUMBER);
sumAndSubtractNumbers(FIRST_NUMBER, SECOND_NUMBER);