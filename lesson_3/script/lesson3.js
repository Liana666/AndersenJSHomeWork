/////////////////////// Helper Functions
function checkValidFunction(callback, thisContext) {
    if (typeof callback === 'function' && thisContext) {
        return;
    }


    throw new Error('Ошибка! callback не является функцией или this равен null/ndefined!');
}


/////////////////////// task 1
Array.prototype.myFilter = function (callback, context) {
    const thisArray = this;
    let filterArray = [];


    checkValidFunction(callback, this);


    thisArray.forEach((item, index, array) => {
        if (callback.call(context, item, index, array)) {
            filterArray.push(item);
        }
    });


    return filterArray;
}

let arr = [1, 2, 3, 4]

/////////////////////// task 2
Array.prototype.myReduce = function (callback, initialValue) {
    const thisArray = this;
    let accumulatorValue = initialValue;


    checkValidFunction(callback, this);


    thisArray.forEach((item, index, array) => {
        if (accumulatorValue !== undefined) {
            accumulatorValue = callback(accumulatorValue, item, index, array);
        } else {
            accumulatorValue = item;
        }
    });


    return accumulatorValue;
}

console.log(arr.myReduce((a, b) => a + b))