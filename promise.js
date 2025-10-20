// promise in js is an  object that reprenting inv(or failer)of asynchronous opperation and its resulting value

/*const promise = new Promise((resolve, reject) => {

    asynchronous operation
})*/


//resolve (value) -call when the operation is sucessfull

//reject(error)-call the when rejection is failed


// creating promise
let mypromise = new Promise((resolve, reject) => {
    let succes = true;

    setTimeout(()=>{
if(succes){

  resolve("promise resolved succesfully!")
}else{
    reject("promise rejected")
}

    },1000)
})


mypromise
.then(result => console.log(result))//run is promise is resolved//
.catch(error => console.log(error))//runs if promise is rejected//
.finally(()=> console.log("promise execution finished"))

