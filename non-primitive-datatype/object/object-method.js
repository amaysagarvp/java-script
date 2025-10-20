// you can store functio inside object that are called methods
const car ={
    brand:"toyota",
    start:function(){
        console.log("car started");
        
    }
}
car.start();

// example - 2
const person = {
    name:"shiljith",
    age:24,
    greet:function(){
        console.log(`hello,my name is ${this.name}`);
        
    }
}

person.greet();
