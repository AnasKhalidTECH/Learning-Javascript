function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("S");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//         console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
     return num1 + num2
}

const result = addTwoNumbers(3, 5)
// console.log("Result:", result);

// function userLoggedIn(username){
//     if(username === undefined){
//         // console.log("Please enter a username");
//         return
//     }
//     else{
//         return `${username} just logged in.`
//     }
// }

// console.log(userLoggedIn("Anas"));

function calculateCartPrice(...val){
    return val
}

// console.log(calculateCartPrice(1000,2000,3000));

const user = {
    username: "Anas",
    price: 300
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}

handleObject(user)
// handleObject({
//     username: "Qadir",
//     price: 400
// })

const myNewArray = [200, 400, 600]

function getSecondValue(getArray){
    return getArray[2]
}

// console.log(getSecondValue(myNewArray));
console.log(getSecondValue([200, 400, 600]));