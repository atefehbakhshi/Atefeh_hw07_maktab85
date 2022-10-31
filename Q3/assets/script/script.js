'use strict'
function unique(arr) {
    let uniqueArray = [...new Set(arr)];
    return uniqueArray
}
const values = [1, "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"]
console.log(unique(values));
