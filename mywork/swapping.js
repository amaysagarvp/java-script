const prompt = require('prompt-sync')();

let a = prompt("enter first number:")
let b = prompt("enter second number:")

console.log("before swapping a=",a,"b=",b);

let temp = a;
a = b;
b = temp;
console.log("after swapping a=",a,"b=",b);

