const user = [
    { name:"ram",age:25},
    { name:"janu",age:24},
    { name:"nethan",age:17},
];
 
const adults = user.filter(user => user .age >=18);

console.log(adults);
