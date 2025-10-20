async function getUsers(){
try{
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = response.json();

    console.log("first 5 users");

    users.slice(0.5).forEach(users => {
       console.log('#$');
        
    });
    
}
}
getUsers();