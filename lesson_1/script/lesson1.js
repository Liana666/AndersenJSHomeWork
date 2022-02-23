const FIRST_NUMBER = +prompt('Введите первое число');
const SECOND_NUMBER = +prompt('Введите второе число');

/////// Check a number for validity
function isValid(number) {
    return isNaN(number) || number <= 0;
}

/////// 1 task
function notationValideNumbers(firstNumber, secondNumber) {
    if (isValid(firstNumber) || isValid(secondNumber)) {
        console.log('Некорректный ввод!');
    } else {
        console.log(firstNumber.toString(secondNumber));
    }
}

/////// 2 task
function sumSubValideNumbers(firstNumber, secondNumber) {
    if (isValid(firstNumber)) {
        console.log('Некорректный ввод!');
    } else if (isValid(secondNumber)) {
        console.log('Некорректный ввод!');
    } else {
        console.log(`Ответ: ${firstNumber + secondNumber}, ${firstNumber - secondNumber}.`);
    }
}

notationValideNumbers(FIRST_NUMBER, SECOND_NUMBER);
sumSubValideNumbers(FIRST_NUMBER, SECOND_NUMBER);