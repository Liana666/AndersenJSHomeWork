///////////////////////task 1

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

///////////////////////task 2

function isValidNumbers(number) {
    return typeof number === 'number' && !isNaN(number);
}

function isValidArray(array) {
    return Array.isArray(array) && arr.every(item => {
        return isValidNumbers(item);
    })
}

function selectFromInterval(array, startIntervalValue, endIntervalValue) {
    const isValid = isValidArray(array) && isValidNumbers(startIntervalValue) && isValidNumbers(endIntervalValue);
    let result = [];

    if (!isValid) {
        throw new Error('Ошибка! невалидное число в интервале или массиве!');
    }

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

