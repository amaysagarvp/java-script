const prompt = require("prompt-sync")();


let age = prompt("enter yor age:");


// let age = 10;
let result = (age >= 18) ? "adult" : "minor";
console.log(result );
