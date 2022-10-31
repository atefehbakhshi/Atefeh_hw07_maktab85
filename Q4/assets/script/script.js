'use strict'
let arr = ['nap', 'pan', 'Hi', '55i', 'i55'];
let obj = {};
const aclean = arrOfAnagramsWords => {
    arrOfAnagramsWords.forEach(item => {
        let itemKey = item.toLowerCase().split('').sort().join('');
        obj[itemKey] = item;
    });
    return Object.values(obj)
}
console.log(aclean(arr));
