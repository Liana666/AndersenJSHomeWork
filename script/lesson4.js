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


        this.num1 = numbers[0];
        this.num2 = numbers[1];
    }


    setX(num) {
        checkedValueIsValid(isValidNumber(num));


        this.num1 = num;
    }


    setY(num) {
        checkedValueIsValid(isValidNumber(num));


        this.num2 = num;
    }


    logSum = () => {
        console.log(this.num1 + this.num2);
    }


    logMul = () => {
        console.log(this.num1 * this.num2);
    }


    logSub = () => {
        console.log(this.num1 - this.num2);
    }


    logDiv = () => {
        console.log(this.num1 / this.num2);
    }
}


