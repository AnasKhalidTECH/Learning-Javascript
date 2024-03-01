// const promiseOne = new Promise(function (resolve, reject){
//     // Do an async task
//     // Db calls, cryptography, network
//     setTimeout(() => {
//         console.log('Async task is complete');
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log("promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log("async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout( () => {
//         resolve({username: "Anas", email: "Anas@google.com"})
//     }, 1000)
// })

// promiseThree.then( (user) => {
//     console.log(user);
// })

// const promiseFour = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve({username: "Anas", password: "123"})
//         }else{
//             reject("error: something went wrong")
//         }
//     }, 1000);
// })

// promiseFour
// .then((user) => {
//     // console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("the promise is either resolved or rejected");
// })

// const promiseFive = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//                 let error = true
//                 if (!error) {
//                     resolve({username: "Javascript", password: "123"})
//                 }else{
//                     reject("error: JS went wrong")
//                 }
//             }, 1000);
// } )

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//    try {
//     const response = await fetch('http://jsonplaceholder.typicode.com/users')
//     // console.log(response);
//    const data = await response.json()
//    console.log(data);
//    } catch (error) {
//     console.log("E: ", error);
//    }
// }

// getAllUsers()

fetch("http://jsonplaceholder.typicode.com/users")
.then( (response) => {
    return response.json()
} )
.then( (data) => {
    console.log(data);
} )
.catch( (error) => {
    console.log(error);
} )