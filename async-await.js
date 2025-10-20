// async-await is syntactic sugar biult on top of promise 
// it makes asynchronous code looks and behave like synchronous
//more readable and maintanable 

// async--markes a function that will retur a promise
//await--await pauses the function execution until a promise is resolve (or rejected)



function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("data loaded!")
        },2000)
    })
}

async function getData () {
    console.log("start");
    
    const result = await fetchData();
    console.log(result);

    console.log("end");
    
    
}
getData();
