function oddeven(...numbers){
    const odd = numbers.filter(num => num % 2 !==0);
    const even = numbers.filter(num => num % 2===0)
    return{odd,even}
}
const result = oddeven(1,2,3,4,5,6,7,8,9);
console.log(result);
