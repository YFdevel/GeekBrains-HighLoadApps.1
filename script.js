import *as Functions from './functions.js';

const bigArray = [];
const bigSet = new Set();
Functions.createData(bigArray, bigSet, 10000000);

const timeAddToArray = Functions.workWithArray('w', bigArray, 'unshift');
const timeDeleteFromArray = Functions.workWithArray('w', bigArray, 'shift');
Functions.workWithArray('w', bigArray, 'push', 'node');
const timeFindInArray = Functions.workWithArray('w', bigArray, 'indexOf');
Functions.workWithArray('w', bigArray, 'pop');
const timeAddToSet = Functions.workWithSet('w', bigSet, 'add');
const timeFindInSet = Functions.workWithSet('w', bigSet, 'has');
const timeDeleteFromSet = Functions.workWithSet('w', bigSet, 'delete');

Functions.compareOperations(timeAddToArray, timeAddToSet, 'добавление элемента');
Functions.compareOperations(timeFindInArray, timeFindInSet, 'поиск элемента');
Functions.compareOperations(timeDeleteFromArray, timeDeleteFromSet, 'удаление элемента');
