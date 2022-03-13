/////////////////////// Helper Functions

///// Check a value for validity (value is number, no NaN and no Infinity)
function isValidNumbers(number) {
    return typeof number === 'number' && Number.isFinite(number);
}


///// Check a array for validity (is array, every value is number, no NaN and no Infinity)
function isValidArray(array) {
    return Array.isArray(array) && array.every(isValidNumbers);
}


///// If value not valid throw Error
function checkedValueIsValid(isValid) {
    if (isValid) {
        return;
    }


    throw new Error('Ошибка! невалидное число!');
}


//////////////////////// task 1
function makeObjectDeepCopy(obj) {
    const objDeepCopy = {};


    Object.keys(obj).forEach((item) => {
        if (typeof obj[item] !== 'object') {
            objDeepCopy[item] = obj[item];
            return;
        }


        objDeepCopy[item] = makeObjectDeepCopy(obj[item]);
    });


    return objDeepCopy;
}


/////////////////////// task 2
function selectFromInterval(array, startIntervalValue, endIntervalValue) {
    const isValid = isValidArray(array) && isValidNumbers(startIntervalValue) && isValidNumbers(endIntervalValue);
    let includedFromIntervalNumbers = [];


    checkedValueIsValid(isValid);


    if (startIntervalValue < endIntervalValue) {
        includedFromIntervalNumbers = array.filter((item) => item >= startIntervalValue && item <= endIntervalValue);
    } else {
        includedFromIntervalNumbers = array.filter((item) => item >= endIntervalValue && item <= startIntervalValue);
    }


    return includedFromIntervalNumbers.sort((firstValue, secondValue) => firstValue - secondValue);
}


///////////////////////////// task 3
const myIterable = { from: 1, to: 4 };


myIterable[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;

    const isValid = isValidNumbers(current) && isValidNumbers(last) && current < last;


    return {
        next() {
            checkedValueIsValid(isValid);


            if (current <= last) {
                return {
                    done: false,
                    value: current++
                };
            } else {
                return {
                    done: true
                };
            }


        }
    };
};
