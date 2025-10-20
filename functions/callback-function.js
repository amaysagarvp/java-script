//call back functon ARE function that are passed as arguments to other fuction//
//1.handle  asynchronous operation   (synchronous-line by line execution)
//2.avoid blocking code execution

//drobag of call back (hell)

//this is our call back function
function greetuser(name){

    console.log(`hello,${name}!`);}

//this function is takes another function (callback) as an argument 
    function getuserInput(callback){
        const name ="ansab" ; //simulating user input
        callback(name);
    }
    
    getuserInput(greetuser);
