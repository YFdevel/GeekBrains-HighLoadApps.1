export function createData(arr, set, length) {
    for (let i = 0; i < length; i++) {
        arr.push(i);
        set.add(i);
    }
    console.log(`Исходное количество данных в наборах данных: ${length}`);
}

export function compareOperations(timeArray, timeSet, operationName) {
    let diff;
    if (timeArray > timeSet) {
        diff = timeArray - timeSet;
        console.log(`Операция "${operationName}" происходит быстрее в Set, чем в Array`);
    } else if (timeArray < timeSet) {
        diff = timeSet - timeArray;
        console.log(`Операция "${operationName}" происходит быстрее в Array, чем в Set`);
    } else {
        diff = 0;
        console.log(`Операция "${operationName}" сравнима по времени в Array и в Set`);
    }
    console.log(`Разница: ${diff} microseconds`);
    return diff;
}

export function workWithArray(element, array, method) {
    let str = '';
    const time = Date.now();
    const microTime = Math.floor(performance.now() * 1000);
    switch (method) {
        case 'shift':
            array.shift();
            str = 'удаления';
            break;
        case 'pop':
            array.pop();
            str = 'удаления';
            break;
        case 'unshift':
            array.unshift(element);
            str = 'вставки';
            break;
        case 'push':
            array.push(element);
            str = 'вставки';
            break;
        case 'indexOf':
            array.indexOf(element);
            str = 'поиска';
            break;
    }
    const diffTime = Date.now() - time;
    const diffMicroTime = Math.floor(performance.now() * 1000) - microTime;
    console.log(`Продолжительность операции ${str} элемента в array с помощью метода ${method}: ${diffTime} milliseconds, точнее: ${diffMicroTime} microseconds`);
    return diffMicroTime;
}

export function workWithSet(element, set, method) {
    let str = '';
    const time = Date.now();
    const microTime = Math.floor(performance.now() * 1000);
    switch (method) {
        case 'add':
            set.add(element);
            str = 'вставки';
            break;
        case 'has':
            set.has(element);
            str = 'поиска';
            break;
        case 'delete':
            set.delete(element);
            str = 'удаления';
            break;
    }
    const diffTime = Date.now() - time;
    const diffMicroTime = Math.floor(performance.now() * 1000) - microTime;
    console.log(`Продолжительность операции ${str} элемента в set с помощью метода ${method}: ${diffTime} milliseconds, точнее: ${diffMicroTime} microseconds`);
    return diffMicroTime;
}


