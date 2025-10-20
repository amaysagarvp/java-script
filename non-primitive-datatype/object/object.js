
const person = {
name:'amay',
age :21,
isstudent: true
}

console.log(person.name);
console.log(person.age);


// adding data
person.city = "calicut";




// modify data
person.age ="22"

console.log(person);

// remove a property from an object
delete person.city
console.log("final person details is:",person);



