'use strict'
let map = new Map();
map.set("name", "John");
let keys = map.keys(); //because keys is not array so for use push method we have to convert it to array and then use push method on it.

//  first method
keys = [...keys];

// second method
keys = Array.from(keys);

keys.push("more");
console.log(keys)
