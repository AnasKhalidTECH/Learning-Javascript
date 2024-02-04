// if

// const isLoggedIn = true
// const temp = 40

// if(isLoggedIn == true){
//     console.log("User logged in successfully");
// }
// else{
//     console.log("Please log in");
// }

// if(temp < 40){
//     console.log("Weather is nice today");
// }
// else{
//     console.log("It's kinda hot out there");
// }

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");;


// if (balance < 500){
//     console.log("balance is less then 500");
// }
// else if (balance < 750){
//     console.log("balance is less then 750");
// }
// else if (balance < 900){
//     console.log("balance is less then 900");
// }
// else{
//     console.log("balance is less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}