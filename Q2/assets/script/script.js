'use strict'
function arr(...argument) {
    let mergedArray = [];
    argument.map(item => mergedArray.push(...item));
    let sortedArray = mergedArray.sort((a, b) => b - a);
    return sortedArray

};

console.log(arr([1, 2], [3, 40], [5, 6]));
