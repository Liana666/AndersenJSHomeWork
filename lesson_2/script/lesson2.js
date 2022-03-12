/////////////////////// Helper Functions

///// Check a value for validity (value is number, no NaN and no Infinity)
function isValidNumbers(number) {
    return typeof number === 'number' && Number.isFinite(number);
}

///// Check a array for validity (is array, every value is number, no NaN and no Infinity)
function isValidArray(array) {
    return Array.isArray(array) && array.every((item) => {
        return isValidNumbers(item);
    });
}

///// If value not valid throw Error
function checkedValueIsValid(isValid) {
    if (!isValid) {
        throw new Error('Ошибка! невалидное число!');
    }
}


//////////////////////// task 1

function makeObjectDeepCopy(obj) {
    const objDeepCopy = {};

    for (item in obj) {

        if (typeof obj[item] === 'object') {
            objDeepCopy[item] = makeObjectDeepCopy(obj[item]);
            continue;
        }

        objDeepCopy[item] = obj[item];
    }

    return objDeepCopy;
}

/////////////////////// task 2

function selectFromInterval(array, startIntervalValue, endIntervalValue) {
    const isValid = isValidArray(array) && isValidNumbers(startIntervalValue) && isValidNumbers(endIntervalValue);
    let result = [];

    checkedValueIsValid(isValid);

    for (let i = 0; i < array.length; i++) {

        if (startIntervalValue < endIntervalValue) {
            array[i] >= startIntervalValue && array[i] <= endIntervalValue ? result.push(array[i]) : null;
        } else {
            array[i] >= endIntervalValue && array[i] <= startIntervalValue ? result.push(array[i]) : null;
        }

    }

    return result.sort((firstValue, secondValue) => {
        return firstValue - secondValue;
    });
}


///////////////////////////// task 3

const myIterable = { from: 1, to: 4 };

myIterable[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;
    const isValid = isValidNumbers(current) && isValidNumbers(last) && myIterable.from < myIterable.to;

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