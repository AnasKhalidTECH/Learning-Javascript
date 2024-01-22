const user = {
    username: "Anas",
    price: 999,

    welcomemsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomemsg()
// user.username = "Sam"
// user.welcomemsg()
// console.log(this);

// function chai(){
//     let username = "Anas"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "Anas"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "Anas"
//     console.log(this.username);
// }

// chai()

//************Explicit return arrow function**********************/
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//************Implicit return arrow function**********************/
// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(5, 8));