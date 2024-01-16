// singletom
// Object.create - this is constructer method related to singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Anas",
    "full name": "Anas Khalid",
    [mySym]: "mykey1",
    age: 18,
    location: "Karachi",
    email: "anas@gmail.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "anas@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "anas@yahoo.com"
// console.log(jsUser);

jsUser.greeting = function () {
    console.log("Hello JS User");
}

jsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());