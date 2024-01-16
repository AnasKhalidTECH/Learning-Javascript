// singleton or constructor

const tinderUser = new Object();

tinderUser.id = "123abc"
tinderUser.name = "Anas"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "anas@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Anas",
            lastname: "Khalid"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },

    {
        id: 2,
        email: "b@gmail.com"
    },

    {
        id: 3,
        email: "c@gmail.com"
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "js in urdu",
    courseprice: 999,
    courseinstructer: "Anas"
}

const {courseinstructer: instructor} = course // Object destructuring

console.log(instructor);

// {
//     "name": "Anas",
//     "coursename": "js in urdu",
//     "fees": "free"
// }

