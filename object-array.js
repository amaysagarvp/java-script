const students = [
       {name: 'amay', age: 22, grade:'A'},
        { name: 'shiljith', age: 24, grade: 'A' }
]

//accessing datas
console.log(students[0].name);
console.log(students[1].age);


//looping through object array
students.forEach(stdnts => {
    console.log(`${stdnts.name}is ${stdnts.age}years old`);
    
})