function makeObjectDeepCopy (obj) {
    const deepClone = {};

    if (typeof obj !== 'object' || obj === null) {
        return obj;
      }
    
    for (key in obj) {
        deepClone[key] = makeObjectDeepCopy(obj[key]);
    }

    return deepClone;
}

function selectFromInterval(arr, arg1, arg2) {
    const isCorrect = Array.isArray(arr) && array.every((el) => Number.isFinite(el)) && Number.isFinite(arg1) && Number.isFinite(arg2);
    const newArr =[];
    const res = [];

    if (!isCorrect) {
        throw new Error ('Ошибка! Не корректное значение!')
    }
}