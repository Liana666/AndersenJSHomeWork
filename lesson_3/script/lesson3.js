/////////////////////// Helper Functions
function checkValidFunction(callback) {
    if (!(typeof callback === 'function' && this)) {
        throw new Error('Ошибка! Переданное в параметрах значение не является функцией');
    }
}

/////////////////////// task 1
Array.prototype.myFilter = function (callback) {
    let filterArray = [];
    const thisArr = this;

    checkValidFunction(callback);

    for (let i = 0; i <= thisArr.length; i++) {

        if (callback(thisArr[i], i, thisArr)) {
            filterArray.push(thisArr[i]);
        }

    }

    return filterArray;
}


/////////////////////// task 2
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulatorValue = initialValue;
    const thisArray = this;

    for (let i = 0; i < thisArray.length; i++) {

        if (accumulatorValue !== undefined) {
            accumulatorValue = callback(accumulatorValue, thisArray[i], i, thisArray);
        } else {
            accumulatorValue = thisArray[i];
        }

    }

    return accumulatorValue;
}