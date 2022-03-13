/////////////////////// Helper Functions
function checkValidFunction(callback) {
    if (typeof callback === 'function' && this) {
        return;
    }


    throw new Error('Ошибка! callback не является функцией или this равен null/undefined!');
}


/////////////////////// task 1
Array.prototype.myFilter = function (callback, context) {
    const thisArray = this;
    let filterArray = [];


    checkValidFunction(callback);


    thisArray.forEach((item, index, array) => {
        if (callback.call(context, item, index, array)) {
            filterArray.push(item);
        }
    });


    return filterArray;
}


/////////////////////// task 2
Array.prototype.myReduce = function (callback, initialValue) {
    const thisArray = this;
    let accumulatorValue = initialValue;


    checkValidFunction(callback);


    thisArray.forEach((item, index, array) => {
        if (accumulatorValue !== undefined) {
            accumulatorValue = callback(accumulatorValue, item, index, array);
        } else {
            accumulatorValue = item;
        }
    });


    return accumulatorValue;
}
