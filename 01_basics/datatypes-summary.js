// Primitive

//  7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp= null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["batman", "superman", "spiderman"]

let myObj = {
    name: "Anas",
    age: 25,
    married: false
}

const myFunction = function(){
    console.log("Hello World!");
}

// console.log(typeof heros);

// Two types of memories
// Stack & Heap
// Stack memories use's in (Primitive data types)
// Heap memories use's in (Non-Primitive data types)
// Example :-

let myName = "Anas"
let anotherName = myName
anotherName = "Samad"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "anas@gmail.com",
    upi: "anas@ybl"
}

let userTwo = userOne

userTwo.email = "anas@google.com"

console.log(userOne.email);
console.log(userTwo.email);