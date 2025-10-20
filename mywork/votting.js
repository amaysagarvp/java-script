const prompt = require("prompt-sync")();


let age = prompt("enter yor age:");



let result = (age >= 18) ? "your eligible for votting" : "your  not eligible for votting";
console.log(result );