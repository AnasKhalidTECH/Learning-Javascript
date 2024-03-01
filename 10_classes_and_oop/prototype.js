// let myName = "Anas   "
// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.anas = function(){
    console.log("Anas is present in all objects");
}

Array.prototype.heyAnas = function(){
    console.log("Anas says Hello");
}
// heroPower.anas()
// myHeros.anas()
// myHeros.heyAnas()
// heroPower.heyAnas()

// Inheritance

const user = {
    username: "Chai",
    email: "chai@gmail.com"
}
const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "Chai aur code    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Anas".trueLength()
"Khalid".trueLength()