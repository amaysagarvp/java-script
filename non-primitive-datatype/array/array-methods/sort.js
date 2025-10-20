//assenting or dessenting 


let nums = [10,1,21,2]
nums.sort();
console.log(nums);


// numeric sort - ascending order
const numbers1 = [4,2,5,1,3];
numbers1.sort((a,b) => a - b );
console.log(numbers1);


//dscending order//
// const numbers1 = [40,2,50,1,3];
// numbers1.sort((a,b) => a - b );
// console.log(numbers1);



//default string sort (ascending)
let fruits = ['banana','apple','kiwi','orange','cherry'];
fruits.sort();
console.log(fruits);


// descending order for string
let fruits2 = ['banana','apple','kiwi','orange','cherry'];
fruits2.sort((a,b) =>b.localeCompare(a))
console.log(fruits2);