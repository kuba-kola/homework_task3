function makeObjectDeepCopy (obj) {
    const deepClone = {};
    const isCorrect = obj instanceof Object && obj !==null;

    if (!isCorrect) {
        return obj;
    }
    
    for (let key in obj) {
        deepClone[key] = makeObjectDeepCopy(obj[key]);
    }

    return deepClone;
}

function selectFromInterval(arr, arg1, arg2) {
    const correctArgs = Number.isFinite(arg1) && Number.isFinite(arg2);
    const correctArr = Array.isArray(arr) && arr.every((el) => Number.isFinite(el));
    const isCorrect = correctArgs && correctArr;
    const res = arr.filter( (el) => el <= arg1 && el >= arg2 );
    
    if (!isCorrect) {
        throw new Error ('Ошибка!');
    }
    
    return res;
}

const myIterable = {
    from: 1,
    to: 4
};

myIterable[Symbol.iterator] = function() {
    const correctArgs = Number.isFinite(this.from) && Number.isFinite(this.to);
    const isCorrect = correctArgs && this.to > this.from;

    if (!isCorrect) {
        throw new Error ('Ошибка!');
    }

    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        }

        return { done: true };
      }
    }
}