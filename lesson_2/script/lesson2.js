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