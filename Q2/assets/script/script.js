'use strict'
// function sort(...argument) {
//     let mergedArray = [];
//     argument.map(item => mergedArray.push(...item));
//     let sortedArray = mergedArray.sort((a, b) => b - a);
//     return sortedArray
// };

// console.log(sort([1, 2], [3, 40], [5, 6]));

function sort(...argument) {
    let mergedArray = argument.flat();
    let sortedArray = mergedArray.sort((a, b) => b - a);
    return sortedArray
};

console.log(sort([1, 2], [100, 40], [5, 6]));
