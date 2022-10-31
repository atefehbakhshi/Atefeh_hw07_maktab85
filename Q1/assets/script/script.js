'use strict'
let salaries = {
    'John': 100,
    'Pete': 300,
    'Mary': 250,
};
const topSalary = (obj) => {
    let sortedObject = Object.entries(obj).sort(([, a], [, b]) => b - a);
    let [, maximumIncome] = sortedObject[0];
    let userByMaxIncome = sortedObject.filter(([, salary]) => salary === maximumIncome).map(item => item[0]);
    return userByMaxIncome
};
console.log(topSalary(salaries))