//parent class
class animal{
    constructor(name){
        this.name = name;

    }
    //method
    speak(){
        console.log(`${this.name}makes a sound`);
        
    }
}
//child class(inherit from animal)
class Dog extends animal{
    constructor(name,breed){
        super(name);//the parent class constructor
        this.breed = breed;
    }
    //override speak method (polyformism)
    speak(){
        console.log(`${this.name}${this.breed}barks`);
        
    }
}
const dog = new Dog("rex","germen sheperd");
dog.speak();//instance of dog