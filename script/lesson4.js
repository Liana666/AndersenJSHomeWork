/////////////////// Helper Functions

///// Check a value for validity (value is number, no NaN and no Infinity)
function isValidNumber(number) {
    const isNumber = typeof number === 'number';
    const isValidNumber = Number.isFinite(number);


    return isNumber && isValidNumber;
}


///// Check a parameters for validity (is two parameters, every value is number, no NaN and no Infinity)
function isValidNumbers(...numbers) {
    const isValidLength = numbers.length === 2;
    const validEveryNumber = numbers.every(isValidNumber);


    return checkedValueIsValid(isValidLength && validEveryNumber);
}


///// If value not valid throw Error
function checkedValueIsValid(isValid) {
    if (isValid) {
        return;
    }


    throw new Error('Ошибка!');
}


/////////////////task 1
function concatStrings(string, separator) {
    return function (newString) {
        if (typeof newString !== 'string') {
            return string;
        }


        const validSeparator = typeof separator === 'string' ? separator : '';
        const concatenatedStrings = string + validSeparator + newString;


        return concatStrings(concatenatedStrings, separator);
    }
}


///////////////////// task 2
class Calculator {
    constructor(...numbers) {
        isValidNumbers(...numbers);


        this.firstNumber = numbers[0];
        this.secondNumber = numbers[1];
    }


    setX(num) {
        checkedValueIsValid(isValidNumber(num));


        this.firstNumber = num;
    }


    setY(num) {
        checkedValueIsValid(isValidNumber(num));


        this.secondNumber = num;
    }


    logSum = () => {
        console.log(this.firstNumber + this.secondNumber);
    }


    logMul = () => {
        console.log(this.firstNumber * this.secondNumber);
    }


    logSub = () => {
        console.log(this.firstNumber - this.secondNumber);
    }


    logDiv = () => {
        console.log(this.firstNumber / this.secondNumber);
    }
}


